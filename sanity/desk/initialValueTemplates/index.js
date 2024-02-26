import { Template } from "sanity";
import { OLD_PAGE_ID_LIST } from "../helper/defaults";
export const getPageId = (new_id) => OLD_PAGE_ID_LIST[new_id] ?? new_id;
export const InitialValueTemplates = {
  HEADER: getPageId("header"),
  FOOTER: getPageId("footer"),
  // NEWSLETTER: getPageId("newsLetter"),
  SECTIONS: getPageId("sections"),
  // AUTHOR: getPageId("author"),
  CATEGORIES: getPageId("categories"),
  PAGE: getPageId("page"),
  BLOGS: getPageId("blogs"),

};

export const templateBuilders = [
  // {
  //   id: InitialValueTemplates.NEWSLETTER,
  //   title: "NewsLetter",
  //   schemaType: "newsLetter",
  //   value: {
  //     type: "newsLetter",
  //   },
  // },
];

export default [...templateBuilders.map((template) => template)];
