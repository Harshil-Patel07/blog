import { groq } from "next-sanity";

export const pageSlugsQuery = groq`
*[_type == ""]{

}`;
