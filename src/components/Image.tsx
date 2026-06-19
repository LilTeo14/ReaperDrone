import NextImage, { ImageProps } from 'next/image';

const basePath = '/ReaperDrone';

export default function Image({ src, ...rest }: ImageProps) {
  // Prepend basePath if the source is a root-relative path and doesn't already have it
  const normalizedSrc = typeof src === 'string' && src.startsWith('/') && !src.startsWith(basePath)
    ? `${basePath}${src}`
    : src;

  return <NextImage src={normalizedSrc} {...rest} />;
}
