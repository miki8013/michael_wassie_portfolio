"use client";

import { useEffect, useRef, useState } from "react";

const LENS = 140;
const HALF = LENS / 2;

export default function ChromaticAberration() {
  const [pos, setPos]         = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);
  const rafRef   = useRef<number | null>(null);
  const raw      = useRef({ x: -999, y: -999 });
  const cur      = useRef({ x: -999, y: -999 });
  const rEl      = useRef<SVGFEOffsetElement | null>(null);
  const bEl      = useRef<SVGFEOffsetElement | null>(null);
  const activeRef = useRef(false);

  useEffect(() => {
    rEl.current = document.getElementById("ca-r") as SVGFEOffsetElement;
    bEl.current = document.getElementById("ca-b") as SVGFEOffsetElement;

    function tick() {
      rafRef.current = requestAnimationFrame(tick);

      cur.current.x += (raw.current.x - cur.current.x) * 0.14;
      cur.current.y += (raw.current.y - cur.current.y) * 0.14;

      if (activeRef.current) {
        setPos({ x: cur.current.x, y: cur.current.y });
      }

      // Shift amount based on distance from screen center
      const nx    = (cur.current.x / window.innerWidth  - 0.5) * 2;
      const ny    = (cur.current.y / window.innerHeight - 0.5) * 2;
      const dist  = Math.sqrt(nx * nx + ny * ny);
      const angle = Math.atan2(ny, nx);
      const shift = (0.5 + dist * 1.8).toFixed(2); // 0.5–2.3 px
      const dx    = +(Math.cos(angle) * +shift).toFixed(3);
      const dy    = +(Math.sin(angle) * +shift * 0.5).toFixed(3);

      rEl.current?.setAttribute("dx",  String( dx));
      rEl.current?.setAttribute("dy",  String( dy));
      bEl.current?.setAttribute("dx",  String(-dx));
      bEl.current?.setAttribute("dy",  String(-dy));
    }

    function onMove(e: MouseEvent) {
      raw.current      = { x: e.clientX, y: e.clientY };
      activeRef.current = true;
      if (!visible) setVisible(true);
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    }
    function onLeave() {
      activeRef.current = false;
      setVisible(false);
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    }

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <>
      {/* ── SVG filter definition ── */}
      <svg
        aria-hidden
        style={{ position: "fixed", width: 0, height: 0, top: 0, left: 0, overflow: "hidden" }}
      >
        <defs>
          <filter
            id="ca-lens-filter"
            x="-20%" y="-20%"
            width="140%" height="140%"
            colorInterpolationFilters="sRGB"
          >
            {/* Red shifted one direction */}
            <feOffset id="ca-r" in="SourceGraphic" dx="0" dy="0" result="r" />
            <feColorMatrix in="r" type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="rCh" />

            {/* Green centered */}
            <feColorMatrix in="SourceGraphic" type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="gCh" />

            {/* Blue shifted opposite */}
            <feOffset id="ca-b" in="SourceGraphic" dx="0" dy="0" result="b" />
            <feColorMatrix in="b" type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="bCh" />

            <feBlend in="rCh" in2="gCh" mode="screen" result="rg" />
            <feBlend in="rg"  in2="bCh" mode="screen" />
          </filter>
        </defs>
      </svg>

      {/* ── Lens circle — uses CSS filter (not backdrop) to apply CA to its own content ── */}
      {/* The trick: the lens is a fixed div with a screenshot-like background using
          background-attachment: fixed, then CA filter is applied to it directly */}
      <div
        aria-hidden
        style={{
          position:     "fixed",
          left:         pos.x - HALF,
          top:          pos.y - HALF,
          width:        LENS,
          height:       LENS,
          borderRadius: "50%",
          pointerEvents:"none",
          zIndex:        9999,
          opacity:       visible ? 1 : 0,
          transition:   "opacity 0.18s ease",
          overflow:     "hidden",
          // Apply the CA filter to whatever is behind via backdrop-filter
          backdropFilter:       "url(#ca-lens-filter) brightness(1.08) contrast(1.05)",
          WebkitBackdropFilter: "url(#ca-lens-filter) brightness(1.08) contrast(1.05)",
          // Glass ring
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.12)",
            "0 0 0 2px rgba(255,255,255,0.04)",
            "inset 0 0 24px rgba(255,255,255,0.04)",
          ].join(", "),
        }}
      />
    </>
  );
}
