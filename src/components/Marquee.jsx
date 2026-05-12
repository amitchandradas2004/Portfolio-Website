import React from "react";

const stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "DaisyUI",
  "MongoDB",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
];

export default function Marquee() {
  const doubled = [...stack, ...stack];
  return (
    <div className="relative z-1 py-6 border-t border-b border-(--glass-border) overflow-hidden">
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            className="font-(--font-mono) text-[0.7rem] tracking-[2px] text-muted uppercase shrink-0 flex items-center gap-[0.7rem]"
            key={i}
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-(--cyan)opacity-35" />
          </span>
        ))}
      </div>
    </div>
  );
}
