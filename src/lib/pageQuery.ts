import { groq } from "next-sanity";



export const pageQuery = groq`
*[_type=="page" ]{
  title,
  slug,
  pageBuilder[]->{
  name,
  sectionColor,
  content[]{
    ...
  },
}
}
`;
