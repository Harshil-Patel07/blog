import groq from "groq";
import {
  blogHeroSection,
  blogInsightsSection,
  headerFields,
  techImageListSection,
  techStoriesSection,
} from "./fieldQuery";

export const pageQuery = groq`
*[_type == "page"] {
  title,
  "slug": slug.current,
  ${headerFields},
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
