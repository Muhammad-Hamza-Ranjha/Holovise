import Image from "next/image";
import { memo } from "react";

type LightImageRestoreProps = {
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  height: number;
  radius?: number;
};

function LightImageRestoreComponent({
  src,
  alt,
  left,
  top,
  width,
  height,
  radius = 30,
}: LightImageRestoreProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`${width}px`}
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

export const LightImageRestore = memo(LightImageRestoreComponent);
