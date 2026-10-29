import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  theme = "light",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 mb-2.5 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span
            className={`w-6 h-[1px] ${
              isDark ? "bg-[#C9A568]" : "bg-[#A68346]"
            }`}
          />
          <span
            className={`text-xs uppercase tracking-[0.25em] font-semibold ${
              isDark ? "text-[#E0C087]" : "text-[#A68346]"
            }`}
          >
            {eyebrow}
          </span>
          {align === "center" && (
            <span
              className={`w-6 h-[1px] ${
                isDark ? "bg-[#C9A568]" : "bg-[#A68346]"
              }`}
            />
          )}
        </div>
      )}

      <h2
        className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${
          isDark ? "text-white" : "text-[#10251C]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-serif-luxury italic text-base sm:text-lg mt-1 ${
            isDark ? "text-[#E0C087]/90" : "text-[#A68346]"
          }`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-[#FAF8F5]/80" : "text-[#343B35]/85"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
