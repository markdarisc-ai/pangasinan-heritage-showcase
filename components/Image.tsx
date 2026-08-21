type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const basePath = process.env.NODE_ENV === "production" ? "/pangasinan-heritage-showcase" : "";

export function Image({ src, alt, className = "", priority = false }: Props) {
  const resolvedSrc = `${basePath}${src}`;

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
