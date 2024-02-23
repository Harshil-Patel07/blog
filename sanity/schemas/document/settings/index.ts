import { defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
    
    },
    {
      name: "header",
      type: "reference",
      to: [{ type: "header" }],
      validation: (Rule) => Rule.required(),
   
    },
    {
      name: "footer",
      type: "reference",
      to: [{ type: "footer" }],
      validation: (Rule) => Rule.required(),

    },
    // {
    //   name: "annoucementTitle",
    //   title: "Annoucement Title",
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   components: { input: StringArrayInput },
    //   group: "topHeaderData",
    // },
    // {
    //   name: 'connectWithUs',
    //   title: 'Connect With Us',
    //   type: 'array',
    //   of: [{type: 'iconLabelLink'}],
    //   group: "topHeaderData",
    // },
  ],
});
