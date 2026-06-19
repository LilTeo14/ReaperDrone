import NextImage, { ImageProps } from 'next/image';

export default function Image({ src, ...rest }: ImageProps) {
  return <NextImage src={src} {...rest} />;
}

