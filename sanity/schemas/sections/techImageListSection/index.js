import { defineField } from "sanity";
import { sectionColor } from "../../../constants";

export default {
  name: "techImageListSection",
  title: "Tech Image List Section",
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
      initialValue: "orange",
    }),
    defineField({
      
      name: "imageList",
      title: "Image List",
      type: "array",
      of:[{type:"customImage"}]
    }),
  ],
};
