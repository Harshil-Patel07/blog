import {
  PortableText,
  PortableTextReactComponents,
  toPlainText,
} from "@portabletext/react";
import dynamic from "next/dynamic";



import CodeText from "../CodeText";
import Link from "next/link";
import CustomImage from "../CustomImage";
import { RichTextType } from "@/lib/fieldQuery";
import DynamicComponent from "../DynamicComponent";


const CustomClickableImage = dynamic(
  () => import("../CustomImage")
);



export interface RichTextProps {
  block: RichTextType;
  isClickable?: boolean;
}

const RichText: React.FC<RichTextProps> = ({ block, isClickable }) => {
  const { custom_rich_text } = block || {};
  const RichTextComponents: Partial<PortableTextReactComponents> = {
    types: {
      // button: ({ value }) => <Button block={value} />,
      customImage: ({ value }) => (
        <CustomImage isClickable={isClickable} value={value} />
      ),

    },

    unknownType: ({ value, index }) => {
      return <DynamicComponent block={value} index={index} />;
    },
    marks: {
      link: ({ children, value }) => {
        return <Link target={"_blank"} href={value?.href}>{children}</Link>;
      },
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-1 list-disc list-outside [&>li]:text-[0.938em] [&>li]:font-normal [&>li]:text-[#6d6e76] [&>li]:ml-4 [&>li]:mb-[0.7em] [&>li]:leading-[2em] ">{children}</ul>,
      number: ({ children }) => <ol className="mt-1 list-outside [&>li]:text-[0.938em] [&>li]:font-normal [&>li]:text-[#6d6e76] [&>li]:ml-4 [&>li]:mb-[0.7em] [&>li]:leading-[2em] ">{children}</ol>,
    },
    block: {
      "section-heading": (props) => {
        const text = toPlainText((props as unknown as { node: any }).node);
        return (
          <h4 className="font-Graphik font-medium text-[1.625em] lg:text-[1.75em] xl:text-[1.875em] text-[#232536] pt-[0.7em] pb-2  " id={slugify(text)}>
            {text}
          </h4>
        );
      },
      "code-heading": (props) => {
        const text = toPlainText((props as unknown as { node: any }).node);
        return <CodeText text={text} />;
      },
    },
  };
  return (
    <PortableText value={custom_rich_text} components={RichTextComponents} />
  );
};
export default RichText;
