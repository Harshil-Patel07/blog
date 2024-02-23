import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import { blogListingSectionFields, communityHealthSectionFields, customerReviewSectionFields, faqSectionFields, featureSectionFields, heroSectionFields, homeHeroSectionFields, innovativeSolutionSectionFields, insurancePartnerSectionFields, ourStorySectionFields, ourTeamSectionFields, violetHelthSectionFields, visitSectionFields } from "../helper/sectionFields";
import { seofields } from "../helper/seoFields";


export const header = /* groq */ `
header->{
${headerFields}
} 
`;
export const footer = /* groq */ `
footer->{
${footerFields}
} 
`;

export const seo = /* groq */ `seo{
${seofields}  
}`;

export const layoutProps = /* groq */ `*[_type == "settings"][0]{
_id,
_type,
${header},
${footer}
}`;

export const pageBuilder = /* groq */ `
pageBuilder[]->{
_type,
content[]{
(_type == "homeHeroSection") => {
${homeHeroSectionFields}
},
(_type == "heroSection") => {
${heroSectionFields}
},
(_type == "violetHelthSection") => {
${violetHelthSectionFields}
},
(_type == "faqSection") => {
${faqSectionFields}
},
(_type == "insurancePartnerSection") => {
${insurancePartnerSectionFields}
},
(_type == "blogListingSection") => {
${blogListingSectionFields}
},
(_type == "customerReviewSection") => {
${customerReviewSectionFields}
},
(_type == "ourStorySection") => {
${ourStorySectionFields}
},
(_type == "ourTeamSection") => {
${ourTeamSectionFields}
},
(_type == "featureSection") => {
${featureSectionFields}
},
(_type == "communityHealthSection") => {
${communityHealthSectionFields}
},
(_type == "visitSection") => {
${visitSectionFields}
},
(_type == "innovativeSolutionSection") => {
${innovativeSolutionSectionFields}
},
},
}
`;
