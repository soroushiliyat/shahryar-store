import { useState, useRef } from "react";

interface HoverInfoProps {
  label: string;
  value: string;
}

export default function HoverInfo({ label, value }: HoverInfoProps) {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShow(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShow(false), 5000);
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="font-bold whitespace-nowrap">{label}</span>
     {show && (
  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs px-3 py-2 rounded-md backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white text-[11px] font-normal transition-opacity duration-300 z-50 shadow-md whitespace-normal text-center select-text">
    {value}
  </div>
)}
    </div>
  );
}