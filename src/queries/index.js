import groq from "groq";

export const pageQuery = groq`
*[_type == "page"] {
  title,
  "slug": slug.current,
 pageBuilder[]->{
_type,
content[]{
(_type == "blogHeroSection") => {
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
}
  }
}
}

`;
