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
