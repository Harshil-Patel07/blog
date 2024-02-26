import groq from "groq";
import { blogHeroSection, blogInsightsSection, techImageListSection, techStoriesSection } from "./fieldQuery";

export const pageQuery = groq`
*[_type == "page"] {
  title,
  "slug": slug.current,
 pageBuilder[]->{
_type,
content[]{
${blogHeroSection},
${techImageListSection},
${techStoriesSection},
${blogInsightsSection}
  }
}
}

`;
