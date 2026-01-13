// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";

// 1. Dekorasi Pohon Pixel
export const PixelTree = ({ className }) => (
  <svg viewBox="0 0 40 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="30" width="4" height="30" fill="#5D4037" />
    <rect x="14" y="24" width="12" height="6" fill="#2E7D32" />
    <rect x="10" y="18" width="20" height="6" fill="#388E3C" />
    <rect x="6" y="12" width="28" height="6" fill="#43A047" />
    <rect x="14" y="6" width="12" height="6" fill="#4CAF50" />
  </svg>
);

// 2. Ikon Kontroler Retro
export const PixelController = ({ className }) => (
  <svg viewBox="0 0 40 25" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="20" rx="2" fill="#D1D5DB" />
    <rect x="4" y="7" width="8" height="2" fill="#4B5563" />
    <rect x="7" y="4" width="2" height="8" fill="#4B5563" />
    <circle cx="28" cy="8" r="2" fill="#EF4444" />
    <circle cx="34" cy="12" r="2" fill="#EF4444" />
    <rect x="16" y="14" width="8" height="2" fill="#9CA3AF" />
  </svg>
);

// 3. Ikon Joystick Arcade
export const PixelJoystick = ({ className }) => (
  <svg viewBox="0 0 30 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="30" width="20" height="10" fill="#374151" />
    <rect x="13" y="15" width="4" height="15" fill="#9CA3AF" />
    <rect x="10" y="5" width="10" height="10" fill="#EF4444" />
  </svg>
);

// 4. Ikon Hati (Nyawa/Life)
export const PixelHeart = ({ className }) => (
  <svg viewBox="0 0 12 10" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3V1H3V0H5V1H7V0H9V1H11V3H12V6H11V7H10V8H9V9H8V10H4V9H3V8H2V7H1V6H0V3H1Z" fill="#EF4444" />
    <path d="M2 2H3V3H2V2ZM4 2H5V3H4V2ZM7 2H8V3H7V2ZM10 2H11V3H10V2Z" fill="#FCA5A5" />
  </svg>
);

// 5. Ikon Koin Emas
export const PixelCoin = ({ className }) => (
  <svg viewBox="0 0 12 14" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0H8V1H10V2H11V4H12V10H11V12H10V13H8V14H4V13H2V12H1V10H0V4H1V2H2V1H4V0Z" fill="#FBBF24" />
    <rect x="4" y="2" width="4" height="10" fill="#F59E0B" />
    <rect x="5" y="4" width="2" height="6" fill="#FEF3C7" />
  </svg>
);

// 6. Blok Bata Retro
export const PixelBrick = ({ className }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" fill="#92400E" />
    <path d="M0 0H16V2H0V0ZM0 14H16V16H0V14ZM0 7H16V9H0V7ZM7 2V7H9V2H7ZM3 9V14H5V9H3ZM11 9V14H13V9H11Z" fill="#78350F" />
  </svg>
);