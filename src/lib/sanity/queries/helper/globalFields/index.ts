import { imageFields } from "../imageFields";

export const richTextFields = /* groq */ `
_type,
custom_rich_text
`;
export const labelLinkFields = /* groq */ `
_type,
link,
label
`;
export const iconLabelLinkFields = /* groq */ `
_type,
icon{
${imageFields}
},
label,
link
`;
export const buttonFields = /* groq */ `
_type,
variant,
label,
link
`;
export const titleDescriptionButtonFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
cta{
${buttonFields}
}
`;