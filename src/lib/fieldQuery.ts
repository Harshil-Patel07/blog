import { groq } from "next-sanity";

export const contentField = groq`

`;

export const blogHeroSection = groq`
_type,
title,
subTitle,
authorName,
"heroimage": heroimage{
  "url":image.asset->url,
    altText,
  "link":  link{
     label,
       linkType,
       url,
       "slug":slug.current    
  },
    }


`;
