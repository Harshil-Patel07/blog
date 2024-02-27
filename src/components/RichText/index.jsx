import { PortableText, toPlainText } from "@portabletext/react";
import Link from "next/link";
import CustomButton from "../CustomButton";
import CustomImage from "../CustomImage";
import CustomBlockQuote from "../CustomBlockQuote";
import slugify from "slugify";
import CodeText from "../../../sanity/schemas/Global/codeText";
export const RichText = {
  
  types: {
    customImage: ({ value }) =>{
      return <CustomImage block={value}/>
    },
    customButton:({value})=>{
      return <CustomButton block={value}/>
    },
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <Link href={value.url}>{value.text}</Link>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),

  },

  unknownType: ({ value, index }) => {
    console.log(value)
    return <div  key={index} >{toPlainText(value)}</div>;
  },

  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
  
   
    blockquote: ({ children }) => {
      console.log(children)
      return (
        <blockquote className="bg-yellow-200">{children}</blockquote>
      )
    },   

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
        
          rel={  "noindex nofollow"}>
          {children}
        </Link>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-1 list-disc list-outside [&>li]:text-[0.938em] [&>li]:font-normal [&>li]:text-[red] [&>li]:ml-4 [&>li]:mb-[0.7em] [&>li]:leading-[2em] ">{children}</ul>,
    number: ({ children }) => <ol className="mt-1 list-outside [&>li]:text-[0.938em] [&>li]:font-normal [&>li]:text-[#6d6e76] [&>li]:ml-4 [&>li]:mb-[0.7em] [&>li]:leading-[2em] ">{children}</ol>,
  },
  block: {
    "sectionHeading": (props) => {
      const text = toPlainText((props).node);
      console.log(text)
      return (
        <h4
          className="font-Graphik font-medium text-[1.625em] lg:text-[1.75em] xl:text-[1.875em] text-[#232536] pt-[0.7em] pb-2  "
          id={slugify(text)}
        >
          {text}
        </h4>
      );
    },
    "h1": (props) => {
      const text = toPlainText((props).node);
      console.log(text)
      return (
        <h1
          className="font-Graphik font-medium text-[1.625em] lg:text-[1.75em] xl:text-[1.875em] text-[#232536] pt-[0.7em] pb-2  "
          id={slugify(text)}
        >
          {text}
        </h1>
      );
    },
  
    "blockquote":(props)=>{
      const text = toPlainText((props).node);
      return <CustomBlockQuote text={text}/>
    },
    "codeText":(props)=>{
      const text = toPlainText((props).node);
      return <CodeText text={text}/>
    }
  },
};

const YourComponent = (props) => {
  console.log(props)
  return (
    <PortableText value={props?.blocks} components={RichText} />
  );
};

export default YourComponent;




