import Image from "next/image";
import React from "react";

const TechImageListSection = ({ block }) => {
    const { imageList } = block || {};
    console.log(imageList);
  return (
    <div className="flex items-center justify-start gap-[2rem]">
      {imageList &&
        imageList.map((image) => {
          return <Image src={image.src} width={200} height={200} className="max-w-[4rem]" />;
        })}
    </div>
  );
};

export default TechImageListSection;
