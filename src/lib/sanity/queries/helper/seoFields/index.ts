import {
  metaAttributesQuery,
  openGraphQuery,
  twitterQuery,
} from "./metaHelperQuery";

export const seofields = /* groq */ `
_type,
metaTitle,
metaDescription,
openGraph{
${openGraphQuery}
},
twitter{
${twitterQuery}
},
additionalMetaTags[]{
_type,
metaAttributes[]{
${metaAttributesQuery}     
}
}
`;
