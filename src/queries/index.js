import groq from "groq";
import {
  blogHeroSection,
  blogInsightsSection,
  categoriesListeningSection,
  footerFields,
  headerFields,
  techImageListSection,
  techStoriesSection,
} from "./fieldQuery";

export const pageQuery = groq`
*[_type == "page"] {
  title,
  "slug": slug.current,
  ${headerFields},
  ${footerFields},
 pageBuilder[]->{
_type,
content[]{
${blogHeroSection},
${techImageListSection},
${techStoriesSection},
${blogInsightsSection},
${categoriesListeningSection}
  }
}
}

`;

export const blogPageData = groq`
*[_type=="blogs"]| order(publishDate asc){
 _type,
   _id,
   title,
   description,
   content,
   publishDate,
   isPopulare,
   "author":author{
"name": authorName,
   "image":authorImage.image.asset->url
   },
   "slug":slug.current,
   "heroImage":heroImage{
   "image":image.asset->url,
     altText,
     hasLink
   },
"categoryList":category[]->{
title,
 categoryImage{
    altText,
   "image":asset->url
  }
   },
}
`;

export const categoryFields = groq`
*[_type=="categories"]{
_type,
  _id,
  "categoryImage":categoryImage{
  "src":asset->url,
    altText,
    "slug":link.slug.current
  },
title
}
`;
