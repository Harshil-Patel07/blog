import Image from "next/image";
import React from "react";
import RichText from "../RichText";
// import PortableText from "@portabletext/react"
const BlogHeroSection = ({ block }) => {
  const { title, subTitle, authorName, image } = block || {};
console.log(subTitle)
  return (
    <div>
      <div>
        {title && <h3>{title}</h3>}
        {authorName && <p>{authorName}</p>}
        {subTitle.map((item)=>{})}
      <RichText  blocks={subTitle}/>
      </div>
      <div>
        {image && (
          <Image src={image.src} width={500} height={500} alt={image.altText} />
        )}
      </div>
    </div>
  );
};

export default BlogHeroSection;
