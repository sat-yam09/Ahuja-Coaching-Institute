import React from 'react';

interface AhujaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer' | 'badge' | 'icon' | 'responsive';
  size?: 'sm' | 'md' | 'lg';
  showIconOnlyOnMobile?: boolean;
}

export const AhujaLogo: React.FC<AhujaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showIconOnlyOnMobile = false,
}) => {
  const isDarkBackground = variant === 'light' || variant === 'footer';

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-14 md:h-16',
  }[size];

  // If icon-only variant is requested (renders the academic "A" cap mark)
  if (variant === 'icon') {
    return (
      <img
        src="/contact.webp"
        alt="Ahuja Career Institute Crest"
        className={`${sizeClasses} w-auto object-contain select-none ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <div
      className={`inline-flex items-center transition duration-200 ${
        isDarkBackground
          ? 'bg-white px-3 py-1.5 rounded-xl shadow-md border border-gray-100'
          : ''
      } ${className}`}
    >
      {showIconOnlyOnMobile ? (
        <>
          {/* Mobile view: square academic crest mark */}
          <img
            src="/contact.webp"
            alt="Ahuja Career Institute Crest"
            className="sm:hidden h-8 w-8 object-contain select-none"
            loading="eager"
          />
          {/* Desktop/Tablet view: full authentic logo with Since 1998, Crest & Typography */}
          <img
            src="/ahuja-official-logo.webp"
            alt="Ahuja Career Institute"
            className="hidden sm:block h-9 sm:h-11 md:h-12 w-auto object-contain select-none"
            loading="eager"
          />
        </>
      ) : (
        /* Full authentic logo on both mobile and desktop preserving aspect ratio */
        <img
          src="/ahuja-official-logo.webp"
          alt="Ahuja Career Institute"
          className={`${sizeClasses} w-auto object-contain select-none`}
          loading="eager"
        />
      )}
    </div>
  );
};
