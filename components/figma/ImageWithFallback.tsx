"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = ERROR_IMG_SRC,
  className,
  style,
  width,
  height,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const handleError = () => setDidError(true);

  const imageSrc = didError ? fallbackSrc : src;

  const isFillMode = !width && !height; // if not given, use fill mode

  if (isFillMode) {
    return (
      <div className={`relative ${className ?? ""}`} style={style}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          onError={handleError}
          unoptimized={didError}
          {...rest}
        />
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      onError={handleError}
      unoptimized={didError}
      {...rest}
    />
  );
}
