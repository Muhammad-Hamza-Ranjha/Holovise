type LightImageRestoreProps = {
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  height: number;
  radius?: number;
};

export function LightImageRestore({
  src,
  alt,
  left,
  top,
  width,
  height,
  radius = 30,
}: LightImageRestoreProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="pointer-events-none absolute z-10 object-cover dark:hidden"
      style={{
        left,
        top,
        width,
        height,
        borderRadius: radius,
      }}
      draggable={false}
    />
  );
}
