import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export default function Image({
  src,
  alt,
  fill,
  priority,
  className = '',
  loading,
  ...rest
}: ImageProps) {
  const fillClasses = fill ? 'absolute inset-0 w-full h-full' : '';
  const combinedClassName = `${fillClasses} ${className}`.trim();

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : (loading || 'lazy')}
      className={combinedClassName}
      {...rest}
    />
  );
}
