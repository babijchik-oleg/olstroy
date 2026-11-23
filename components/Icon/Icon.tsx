import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fill?: string;
}

export function Icon({ name, size = 24, className, fill = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} className={className} fill={fill} aria-hidden="true">
      <use href={`/icons/icons.svg#${name}`} />
    </svg>
  );
}
