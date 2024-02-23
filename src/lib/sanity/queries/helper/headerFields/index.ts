import { buttonFields, iconLabelLinkFields, richTextFields } from "../globalFields";
import { imageFields } from "../imageFields";

export const navItemFields = /* groq */ `
_type,
title,
link
`;
export const headerFields = /* groq */ `
_id,
_type,
navItems[]{
${navItemFields}
},
connectWithUs[]{
${iconLabelLinkFields}
},
contactLabel{
${buttonFields}
},
ourTherapies{
${buttonFields}
},
cta{
${buttonFields}
},
logo{
${imageFields}   
},
"topHeaderData":{
"annoucementTitle":^.annoucementTitle[],
"connectWithUs":^.connectWithUs[]{
${iconLabelLinkFields}
},
}
`;
