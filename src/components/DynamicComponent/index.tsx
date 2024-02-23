import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));

const LabelLink = dynamic(() => import("../LabelLink"));

const CustomImage = dynamic(() => import("../CustomImage"));

const DynamicComponent: React.FC<{
  block: any;
  index?: number;
  variant?: string;
}> = ({ block, ...props }) => {
  const Components = {
    customImage: CustomImage,
    labelLink: LabelLink,
    richText:RichText
  };
  const Component = block?._type
    ? Components[block?._type as keyof typeof Components]
    : null;
  // @ts-ignore
  return Component ? <Component block={block} {...props} /> : null;
};

export default DynamicComponent;
