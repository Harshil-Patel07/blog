import { labelLinkFields, richTextFields } from "../globalFields";
import { imageFields } from "../imageFields";

export const footerLinksFields = /* groq */ `
_type,
labelLinks[]{
${labelLinkFields}
},
title
`

export const footerFields = /* groq */ `
_id,
_type,
footerLinks[]{
${footerLinksFields}
},
bottomLinks[]{
${labelLinkFields}
},
content{
${richTextFields}
},
bottomDescription,
logo{
${imageFields}   
},
`;