import { defineField } from "sanity";
import { sectionColor } from "../../../constants";

export default {
  name: "categoriesListeningSection",
  title: "categoriesListeningSection",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "sectionColor",
      title: "Section Color",
      type: "string",
      options: {
        list: sectionColor,
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "white",
    }),
    defineField({
      name:"bannerImage",
      title:"Banner Image",
      type:"customImage"
    }),
    defineField({
      name: "allCategories",
      title: "All Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categories" }] }],
    }),
  ],
};
