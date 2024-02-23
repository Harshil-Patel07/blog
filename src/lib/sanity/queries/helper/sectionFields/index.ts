import { buttonFields, richTextFields, titleDescriptionButtonFields } from "../globalFields";
import { imageFields } from "../imageFields";


export const heroSectionFields = /* groq */ `
_type,
title,
headline,
cta{
${buttonFields}
},
description{
${richTextFields}
},
image{
${imageFields}
},
`;

export const homeHeroSectionFields = /* groq */ `
_type,
title,
"contactLabel": *[_type == "header"][0].contactLabel,
"referAPatient": *[_type == "header"][0].cta,
description{
${richTextFields}
},
titleDescriptionButtons[]{
${titleDescriptionButtonFields}
},
thumbnail{
${imageFields}
},
videoSelect,
(@.videoSelect=="file") => { 
"videoFileUrl" : file.asset->url,
"videoFileExtension" : file.asset->extension
},
(@.videoSelect=="url") => { 
"videoUrl":url
},
`;
export const servicesCardFields = /* groq */ `
_id,
_type,
slug,
image{
${imageFields}
},
title,
description{
${richTextFields}
},
`
export const violetHelthSectionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
cta{
${buttonFields}
},
"services":*[_type == "services"][0..5] | order(_createdAt asc) {
${servicesCardFields}
}
`
export const questionAndAnswersFields = /* groq */ `
_type,
question,
answer{
${richTextFields}
}
`
export const faqSectionFields = /* groq */ `
_type,
title,
description,
questionAndAnswers[]{
${questionAndAnswersFields}
}
`
export const insurancePartnerSectionFields = /* groq */ `
_type,
title,
images[]{
${imageFields}
}
`
export const blogsCardFields = /* groq */ `
_id,
_type,
slug,
image{
${imageFields}
},
title,
description{
${richTextFields}
},
authorName,
publishDate
`
export const blogListingSectionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
"blogs":*[_type == "blogs"][0..2] | order(publishDate asc) {
${blogsCardFields}
}
`
export const customerReviewSectionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
`
export const imageContentFields = /* groq */ `
_type,
content{
${richTextFields}
},
image{
${imageFields}
},
`
export const ourStorySectionFields = /* groq */ `
_type,
title,
headline,
image{
${imageFields}
},
imageContents[]{
${imageContentFields}
}
`
export const leaderFields = /* groq */ `
_type,
_id,
name,
post,
image{
${imageFields}
}
`
export const titleDescriptionImageFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
image{
${imageFields}
}
`
export const ourTeamSectionFields = /* groq */ `
_type,
title,
headline,
description{
${richTextFields}
},
"leaders":*[_type == "leader"][0..7]{
${leaderFields}
}
`
export const featureSectionFields = /* groq */ `
_type,
title,
backgroundColorSelect,
titleDescriptionImages[]{
${titleDescriptionImageFields}
},
`
export const communityHealthSectionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
images[]{
${imageFields}
},
`
export const innovativeSolutionDetailFields = /* groq */ `
_type,
title,
subTitle,
description{
${richTextFields}
},
image{
${imageFields}
},
`
export const visitSectionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
cta{
${buttonFields}
},
`
export const innovativeSolutionSectionFields = /* groq */ `
_type,
title,
innovativeSolutionDetails[]{
${innovativeSolutionDetailFields}
},
`