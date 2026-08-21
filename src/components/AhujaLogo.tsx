import React from 'react';

interface AhujaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer' | 'badge';
  size?: 'sm' | 'md' | 'lg';
}

export const AhujaLogo: React.FC<AhujaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isDarkBackground = variant === 'light' || variant === 'footer';

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-13 sm:h-16',
  }[size];

  return (
    <div
      className={`inline-flex items-center transition duration-200 ${
        isDarkBackground
          ? 'bg-white px-3 py-1.5 rounded-xl shadow-md border border-amber-200/40 hover:shadow-lg'
          : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 445 140"
        className={`${sizeClasses} w-auto drop-shadow-xs select-none`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ahuja Career Institute Logo"
      >
        {/* Top-Left: "Since1998" */}
        <text
          x="4"
          y="15"
          fill="#000000"
          fontSize="15"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
          letterSpacing="0.2"
        >
          Since1998
        </text>

        {/* --- LEFT ICON: ACADEMIC LETTER 'A' WITH CAP & DIPLOMA --- */}
        <g id="logo-icon-mark">
          {/* Red Bold Letter 'A' with Black Outline */}
          <path
            d="M 14 130 L 53 40 L 77 40 L 116 130 L 92 130 L 83 105 L 47 105 L 38 130 Z M 65 59 L 53 88 L 77 88 Z"
            fill="#FF0000"
            stroke="#000000"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Black Graduation Mortarboard Cap */}
          <g id="graduation-cap">
            {/* Diamond Cap Top */}
            <polygon
              points="65,18 110,32 65,46 20,32"
              fill="#000000"
              stroke="#FFFFFF"
              strokeWidth="0.8"
            />
            {/* Cap Skull Base fitting over 'A' apex */}
            <path
              d="M 42,39 L 42,48 C 42,56 88,56 88,48 L 88,39 Z"
              fill="#000000"
            />
            {/* Tassel dangling on left */}
            <path
              d="M 23,33 L 23,62"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="23" cy="63" r="2.5" fill="#000000" />
            <path
              d="M 21,63 L 25,63 L 24,70 L 22,70 Z"
              fill="#000000"
            />
          </g>

          {/* Trademark (TM) Symbol */}
          <g id="trademark-symbol">
            <circle cx="116" cy="22" r="6" stroke="#000000" strokeWidth="1" fill="#FFFFFF" />
            <text
              x="116"
              y="24.5"
              fontSize="6"
              fontWeight="900"
              fontFamily="Arial, sans-serif"
              textAnchor="middle"
              fill="#000000"
            >
              TM
            </text>
          </g>

          {/* White Rolled Diploma Scroll across 'A' */}
          <g id="diploma-scroll">
            {/* Scroll Cylinder */}
            <path
              d="M 18,112 C 16,108 19,102 26,98 L 88,64 C 95,60 101,64 103,70 C 105,76 100,82 93,86 L 31,120 C 24,124 18,120 18,112 Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Rolled Left Edge */}
            <ellipse
              cx="22"
              cy="108"
              rx="4"
              ry="7"
              transform="rotate(-28 22 108)"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="2"
            />
            {/* Ribbon Tie in Middle */}
            <path
              d="M 58,80 L 64,76 L 70,89 L 64,93 Z"
              fill="#000000"
            />
            {/* Ribbon Tails */}
            <path
              d="M 64,90 L 59,104 L 66,99 L 72,106 L 69,90 Z"
              fill="#000000"
            />
          </g>
        </g>

        {/* --- RIGHT TYPOGRAPHY: "AHUJA" & "CAREER INSTITUTE" --- */}
        {/* Main "AHUJA" Header */}
        <text
          x="136"
          y="80"
          fill="#FF0000"
          stroke="#000000"
          strokeWidth="2.5"
          style={{ paintOrder: 'stroke fill' }}
          fontSize="68"
          fontWeight="900"
          fontFamily="'Impact', 'Arial Black', 'Trebuchet MS', sans-serif"
          letterSpacing="1.5"
        >
          AHUJA
        </text>

        {/* Middle Underline Bar */}
        <line
          x1="136"
          y1="93"
          x2="442"
          y2="93"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="square"
        />

        {/* Subtitle "CAREER INSTITUTE" */}
        <text
          x="136"
          y="123"
          fill="#000000"
          fontSize="29"
          fontWeight="900"
          fontFamily="'Arial Black', 'Plus Jakarta Sans', sans-serif"
          letterSpacing="0.2"
        >
          CAREER INSTITUTE
        </text>

        {/* Bottom Underline Bar */}
        <line
          x1="136"
          y1="133"
          x2="442"
          y2="133"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};
