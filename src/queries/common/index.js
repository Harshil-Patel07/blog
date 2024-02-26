import groq from "groq";

export const imageFields = groq`
"src":image.asset->url,
    altText,
  "link":  link{
     label,
       linkType,
       url,
       "slug":slug.current    
  },
`;


export const buttonFields=groq`
 button{
    label,
    "slug":slug.current,
    variant
  }
`