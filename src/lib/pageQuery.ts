import { groq } from "next-sanity";
import {blogHeroSection} from '../lib/fieldQuery'

export const pageQuery = groq`
*[_type == "page"] {
  title,
  "slug": slug.current,
 pageBuilder[]->{
_type,
content[]{
(_type == "blogHeroSection") => {
${blogHeroSection}
},

  },
},
}

`;
