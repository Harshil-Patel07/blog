import groq from "groq";
import { buttonFields, imageFields } from "../common";

export const blogHeroSection = groq`
(_type == "blogHeroSection") => {
  _type,
  _id,
title,
subTitle,
authorName,
"image": heroimage{
  ${imageFields}
    }
}
`;
export const techImageListSection = groq`
(_type=="techImageListSection")=>{
_type,
_id,

  imageList[]{
    ${imageFields}
  }
}
`;
export const techStoriesSection = groq`
(_type=="techStoriesSection")=>{
  _type,
  _key,
  sectionColor,
  title,
 ${buttonFields},
}
`;
export const blogInsightsSection = groq`
(_type=="blogInsightsSection")=>{
  _type,
  _key,
  sectionColor,
  title,
 ${buttonFields},
}
`;
export const headerFields = groq`
   "header":header->{
    _id,
    _type,
    "logoImage":logoImage{
      hasLink,
      altText,
      "link":link{
      linkType,
      "slug":slug.current
      },
    "image":image.asset->url,
    },
navList[]{
"link":link{
  label,
  "slug":slug.current
}
}
    
  }
`;
