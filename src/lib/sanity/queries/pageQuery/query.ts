import { groq } from "next-sanity";
import { handleSanityRequestError } from "../../utils";
import { layoutProps, pageBuilder, seo } from "../helperQueries";

const groqQuery = groq`*[_type == "page" && slug.current==$slug]{
_type,
_id,
"slug":slug.current,
"layoutProps":${layoutProps},
${seo},
${pageBuilder}
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
