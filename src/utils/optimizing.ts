interface ImageLoaderProps {
  src: string;
  width: number;
  quality: number | undefined;
}

export function projectImageLoader(loaderProps: ImageLoaderProps) {
  return `https://raw.githubusercontent.com/HenriqueSenaDev/assets/main/${loaderProps.src}`;
}
