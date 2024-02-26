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
    socialLinks[]{
      _key,
     "slug":slug.current,
      label,
      linkType,
    },
navList[]{
"link":link{
  label,
  "slug":slug.current
}
}
  }
`;

export const footerFields=groq`
"footer":footer->{
 _id,
    title,
    socialLinks[]{
      _key,
     "slug":slug.current,
      label,
      linkType,
    },
    links[]{
      _key,
   "slug":slug.current,
      label,
      linkType,
    }
}
`


export const  categoriesListeningSection= groq`

(_type=="categoriesListeningSection")=>{
_type,
_key,
title,
"allCategories":allCategories[]->{
  _id,
title,
  "categoryLink":categoryLink.current,
  "categoryImage":categoryImage.asset->url
}
  
} 

`