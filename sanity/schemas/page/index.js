import { defineField } from "sanity";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
    }),
    defineField( {
      name: "pageBuilder",
      type: "array",
      of: [{ type: "reference", to: { type: "section" } }]
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
    }),
  ],
};
