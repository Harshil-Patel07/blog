import { defineField } from "sanity";
import { linkList } from "../../../constants";

export default {
  name: "customLink",
  title: "Custom Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      description:"select one from it",
      options: {
        list: linkList,
        layout: "radio",
        direction: "horizontal",
      
      },
      initialValue:"internal"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: ({ parent }) => parent?.linkType !== "internal",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),
  ],

};
