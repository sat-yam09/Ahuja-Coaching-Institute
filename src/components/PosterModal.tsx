'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  Award,
  Sparkles,
  ExternalLink,
  Move,
  CheckCircle2,
} from 'lucide-react';
import { PosterAsset } from '../types';

interface PosterModalProps {
  poster: PosterAsset | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ poster, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom & pan when opening a new poster
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setIsFullscreen(false);
    }
  }, [isOpen, poster]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') handleResetZoom();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, scale]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.4, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.4, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  if (!isOpen || !poster) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-all animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        className={`relative bg-white w-full ${
          isFullscreen ? 'max-w-[98vw] h-[96vh]' : 'max-w-5xl max-h-[92vh]'
        } rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-10 text-gray-900 transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-gray-200 bg-gray-50/95 backdrop-blur-sm select-none">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                  {poster.category}
                </span>
                <span className="text-[11px] text-gray-500 font-medium">{poster.year}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                {poster.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            {/* Zoom Controls Bar */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5 shadow-xs">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                title="Zoom Out (-)"
                className="p-1.5 text-gray-600 hover:text-red-600 disabled:opacity-35 disabled:hover:text-gray-600 rounded transition cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-1.5 text-[11px] font-bold text-gray-700 min-w-[42px] text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={scale >= 3.5}
                title="Zoom In (+)"
                className="p-1.5 text-gray-600 hover:text-red-600 disabled:opacity-35 disabled:hover:text-gray-600 rounded transition cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {scale > 1 && (
                <button
                  onClick={handleResetZoom}
                  title="Reset Zoom (0)"
                  className="p-1.5 text-gray-500 hover:text-red-600 border-l border-gray-200 rounded-r transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Toggle Fullscreen Modal */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Expand Fullscreen'}
              className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition hidden sm:inline-flex cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {poster.downloadUrl && (
              <a
                href={poster.downloadUrl}
                download
                className="hidden md:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
          {/* Main Poster Image Display Container with Pan & Zoom */}
          <div
            ref={containerRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`relative rounded-xl overflow-hidden bg-gray-950 border border-gray-800 flex items-center justify-center select-none ${
              isFullscreen ? 'h-[68vh]' : 'h-[54vh] sm:h-[60vh]'
            } ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
            onClick={() => {
              if (scale === 1) handleZoomIn();
            }}
          >
            <div
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                imageRendering: '-webkit-optimize-contrast',
              }}
              className="max-h-full max-w-full flex items-center justify-center origin-center"
            >
              <img
                src={poster.imageUrl}
                alt={poster.title}
                draggable={false}
                className="max-h-[52vh] sm:max-h-[58vh] w-auto object-contain rounded shadow-lg pointer-events-none"
              />
            </div>

            {/* Helper Overlays */}
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center space-x-1 pointer-events-none opacity-85">
              {scale > 1 ? (
                <>
                  <Move className="w-3 h-3 text-red-400" />
                  <span>Drag to pan • Scroll to zoom</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-3 h-3 text-red-400" />
                  <span>Click or scroll to zoom in high-res</span>
                </>
              )}
            </div>

            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded pointer-events-none opacity-75">
              HD Vector-rendered Preview
            </div>
          </div>

          {/* Description & Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="md:col-span-2 space-y-1.5">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                About this Publication
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {poster.description}
              </p>
            </div>

            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 space-y-1.5">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-red-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Publication Highlights</span>
              </div>
              <ul className="space-y-1">
                {poster.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex items-start space-x-1.5">
                    <CheckCircle2 className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 border-t border-gray-200 bg-gray-50 gap-2">
          <p className="text-xs text-gray-500">
            Ahuja Career Institute • 27+ Years Legacy • Admissions 2026-27 Open
          </p>
          <div className="flex items-center space-x-2">
            <a
              href={poster.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-200 transition cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Raw Image</span>
            </a>
            {poster.downloadUrl && (
              <a
                href={poster.downloadUrl}
                download
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
