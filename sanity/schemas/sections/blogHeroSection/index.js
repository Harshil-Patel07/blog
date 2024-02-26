import { defineField } from "sanity";
import { sectionColor } from "../../../constants";

export default {
  name: "blogHeroSection",
  title: "Blog Hero  Section",
  type: "object",
  fields: [
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
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "richText",
    }),
    defineField({
      name: "heroimage",
      title: "Hero Image",
      type: "customImage",
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
  ],
};
