import { default as NextImage, ImageProps } from "next/image";
import dynamic from "next/dynamic";
import { ImageType } from "@/lib/fieldQuery";


const Image: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    src: string | ImageType;
    alt?: string;
  }
> = ({ src, quality, ...props }) => {
  switch (typeof src) {
    case "object":
      return <Image src={src} {...props} />;
    default:
      return <NextImage src={src} {...props} alt={props.alt || ""} />;
  }
};
Image.displayName = "Image";
export { Image };
export default Image;
