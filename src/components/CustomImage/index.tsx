
import { CustomImageType } from "@/lib/fieldQuery";
import { Image } from "../Image";
import { ImageProps } from "next/image";
const CustomImage: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    alt?: string;
    block: CustomImageType | null;
  }
> = ({ block, ...props }) => {
  const { alt, caption, image, link } = block || {};
  if (!image) {
    return null;
  }
  return <Image src={image} alt={(props.alt ?? alt) || ""} {...props} />
};

export default CustomImage;
