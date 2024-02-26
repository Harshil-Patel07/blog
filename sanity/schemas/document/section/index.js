import { SchemaTypeDefinition, defineField } from "sanity";
import { sectionColor } from "../../../constants";
export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [

    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "This field is only used for CMS.",
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
      initialValue:"white"
    }),


    defineField({
      name: "content",
      title:"Content",
      type: "array",
      of: [{ type: "blogHeroSection" }],
    }),
  ],
};
