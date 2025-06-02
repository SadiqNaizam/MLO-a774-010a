import React from 'react';
import { cn } from '@/lib/utils';

interface ScoreRadialMeterProps {
  score: number; // Percentage value from 0 to 100
  label: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

// Using HSL value from tailwind.config.ts for dark mode primary color
const PRIMARY_COLOR_HSL = '217 93% 68%'; // --primary (accentBlue)

const ScoreRadialMeter: React.FC<ScoreRadialMeterProps> = ({
  score,
  label,
  className,
  size = 120,
  strokeWidth = 12,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const primaryColor = `hsl(${PRIMARY_COLOR_HSL})`;
  const trackColor = 'hsl(var(--muted) / 0.3)'; // A lighter, muted color for the track

  return (
    <div className={cn('flex flex-col items-center space-y-2', className)}>
      <div style={{ width: size, height: size }} className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          {/* Background Circle Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress Arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={primaryColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.35s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold" style={{ color: primaryColor }}>
            {Math.round(score)}
          </span>
        </div>
      </div>
      <p className="text-sm font-medium text-card-foreground tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default ScoreRadialMeter;
