import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";

const CustomImage = ({ block }) => {
  const { image, altText } = block || {};
  return <img src={urlForImage(image.asset)} alt={altText} />;
};

export default CustomImage;
