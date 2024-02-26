import { defineField } from "sanity";

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
      name: "allCategories",
      title: "All Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categories" }] }],
    }),
  ],
};
