"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement!;
    let W = parent.clientWidth;
    let H = parent.clientHeight;

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    // ── Perspective camera ─────────────────────────────────────────────────
    // FOV 60, camera at z=10
    // visible half-height at z=0: tan(30°) * 10 = 5.77
    const FOV      = 60;
    const CAM_Z    = 10;
    const HALF_H   = Math.tan((FOV / 2) * (Math.PI / 180)) * CAM_Z; // ~5.77
    const getHalfW = () => HALF_H * (W / H);

    const camera = new THREE.PerspectiveCamera(FOV, W / H, 0.1, 100);
    camera.position.set(0, 0, CAM_Z);
    camera.lookAt(0, 0, 0);

    // ── Grid ───────────────────────────────────────────────────────────────
    // 70 cols × 45 rows — denser grid, spans 110% of visible area
    const COLS     = 70;
    const ROWS     = 45;
    const BLEED    = 1.15; // 15% extra on each side
    const totalPts = COLS * ROWS;

    const baseX = new Float32Array(totalPts);
    const baseY = new Float32Array(totalPts);
    const pos   = new Float32Array(totalPts * 3);

    const buildGrid = () => {
      const hw = getHalfW() * BLEED;
      const hh = HALF_H     * BLEED;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i  = r * COLS + c;
          const x  = -hw + (c / (COLS - 1)) * hw * 2;
          const y  = -hh + (r / (ROWS - 1)) * hh * 2;
          baseX[i] = x;
          baseY[i] = y;
          pos[i * 3]     = x;
          pos[i * 3 + 1] = y;
          pos[i * 3 + 2] = 0;
        }
      }
    };
    buildGrid();

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const idx: number[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c;
        if (c < COLS - 1) idx.push(i, i + 1);
        if (r < ROWS - 1) idx.push(i, i + COLS);
      }
    }
    geo.setIndex(idx);

    const mat = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.45,
    });

    scene.add(new THREE.LineSegments(geo, mat));

    // ── Mouse in world space (unproject NDC at z=0) ────────────────────────
    const mouse = new THREE.Vector2(99999, 99999);
    const onMouseMove = (e: MouseEvent) => {
      const nx =  (e.clientX / W) * 2 - 1;
      const ny = -(e.clientY / H) * 2 + 1;
      // world coords at z=0 plane from perspective camera
      mouse.set(nx * getHalfW(), ny * HALF_H);
    };

    // ── Resize ─────────────────────────────────────────────────────────────
    const onResize = () => {
      W = parent.clientWidth;
      H = parent.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      buildGrid();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize",    onResize);

    // ── Animate ────────────────────────────────────────────────────────────
    let raf: number;
    let t = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      t  += 0.016;

      const arr = geo.attributes.position.array as Float32Array;

      for (let i = 0; i < totalPts; i++) {
        const x = baseX[i];
        const y = baseY[i];

        // Slow ambient wave — breathes Z in and out (no sideways travel)
        // Spatial shape is fixed; amplitude pulses over time
        const shape   = Math.sin(x * 0.55) * Math.cos(y * 0.45);
        const ambient = shape * (0.5 + 0.5 * Math.sin(t * 0.8)) * 1.2;

        // Mouse ripple — gaussian bell on Z, cosine rings spreading out
        const dx   = x - mouse.x;
        const dy   = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const R    = 3.0; // world-unit radius
        const ripple =
          dist < R * 2
            ? 2.2 *
              Math.exp((-dist * dist) / (R * R * 0.5)) *
              Math.cos(dist * 2.8 - t * 6)
            : 0;

        arr[i * 3]     = x;
        arr[i * 3 + 1] = y;
        arr[i * 3 + 2] = ambient + ripple; // ONLY z moves
      }

      geo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize",    onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        zIndex:        0,
        pointerEvents: "none",
        display:       "block",
      }}
    />
  );
};

export default ThreeBackground;
