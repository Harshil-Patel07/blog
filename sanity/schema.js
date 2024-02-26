
import globalTypes from "./schemas/Global";
import { documentsTypes } from "./schemas/document";
import blogs from "./schemas/document/blogs";
import page from "./schemas/page";
import sectionsTypes from "./schemas/sections";

export const schema = {
  types: [
    page,
    blogs,
    ...documentsTypes,
    ...sectionsTypes,
  ...globalTypes
  ],
}
