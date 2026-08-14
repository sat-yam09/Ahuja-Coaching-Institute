import React from 'react';

interface AhujaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

export const AhujaLogo: React.FC<AhujaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLightText = variant === 'light' || variant === 'footer';

  const dimensions = {
    sm: { height: 'h-10', textMain: 'text-xl', textSub: 'text-[10px]' },
    md: { height: 'h-13', textMain: 'text-2xl sm:text-3xl', textSub: 'text-[11px] sm:text-[12px]' },
    lg: { height: 'h-16', textMain: 'text-3xl sm:text-4xl', textSub: 'text-xs sm:text-sm' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Graphic: Graduation cap + Red 'A' + Scroll */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 160 140"
          className={`${dimensions.height} w-auto drop-shadow-md overflow-visible`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top 'Since 1998' text */}
          <text
            x="4"
            y="14"
            fill={isLightText ? '#FDE68A' : '#5C1315'}
            fontSize="13"
            fontWeight="800"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            letterSpacing="0.5"
          >
            Since 1998
          </text>

          {/* Red Bold 'A' Letter */}
          <path
            d="M 50,120 L 72,30 L 98,30 L 120,120 L 98,120 L 92,95 L 78,95 L 72,120 Z M 85,46 L 81,78 L 89,78 Z"
            fill="#DC2626"
            stroke={isLightText ? '#7F1D1D' : '#991B1B'}
            strokeWidth="1.5"
          />

          {/* Black Graduation Cap over 'A' */}
          <g transform="translate(18, 22) scale(0.95)">
            {/* Cap Diamond top */}
            <polygon points="50,18 90,30 50,42 10,30" fill="#0F172A" />
            <polygon points="50,18 90,30 50,42 10,30" stroke="#F8FAFC" strokeWidth="2" />
            {/* Cap skull base */}
            <path d="M 28,36 L 28,48 C 28,54 72,54 72,48 L 72,36 Z" fill="#1E293B" stroke="#F8FAFC" strokeWidth="1" />
            {/* Tassel */}
            <path d="M 82,30 L 90,44 L 90,58" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="90" cy="60" r="3.5" fill="#FBBF24" />
          </g>

          {/* White Scroll / Diploma wrapped across A with red ribbon */}
          <g transform="translate(16, 70) rotate(-15)">
            {/* Scroll body */}
            <path
              d="M 10,12 C 10,12 80,-8 110,12 C 110,12 100,24 10,24 Z"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            {/* Scroll rolled ends */}
            <ellipse cx="10" cy="18" rx="3.5" ry="6.5" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2" />
            <ellipse cx="110" cy="18" rx="3.5" ry="6.5" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2" />
            {/* Red Ribbon tie */}
            <path d="M 58,2 L 64,22 L 68,22 L 62,2 Z" fill="#DC2626" />
            <path d="M 60,18 L 52,32 L 58,30 L 64,36 Z" fill="#DC2626" />
          </g>
          
          {/* Registered Symbol ® */}
          <circle cx="132" cy="22" r="6" fill={isLightText ? '#78350F' : '#FEF3C7'} stroke={isLightText ? '#F59E0B' : '#5C1315'} strokeWidth="1.2" />
          <text x="132" y="25" fontSize="8" fill={isLightText ? '#FBBF24' : '#5C1315'} fontWeight="bold" textAnchor="middle">R</text>
        </svg>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center">
        <div
          className={`${dimensions.textMain} font-black tracking-tight leading-none ${
            isLightText ? 'text-white drop-shadow-xs' : 'text-[#4A0E10]'
          }`}
          style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
        >
          AHUJA
        </div>
        <div className={`mt-1 border-t-2 border-b pt-[2px] pb-[1px] ${
          isLightText ? 'border-amber-400/80' : 'border-[#4A0E10]'
        }`}>
          <span
            className={`${dimensions.textSub} font-extrabold uppercase tracking-[0.2em] block leading-none ${
              isLightText ? 'text-amber-300 font-outfit' : 'text-[#1A1818] font-outfit'
            }`}
          >
            CAREER INSTITUTE
          </span>
        </div>
      </div>
    </div>
  );
};

