import { defineField } from "sanity";

export default {
  name: "techStories",
  title: "Tech Stories",
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
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "isPopulare",
      title: "Is Populare",
      type: "boolean",
    }),
    // defineField({
    //   name: "description",
    //   title: "Description",
    //   type: "richText",
    // }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "customImage",
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "date",
    }),
    // defineField({
    //   name: "content",
    //   title: "Content",
    //   type: "richText",
    // }),
    defineField({
        name:"category",
        title:"Category",
        type:"reference",
        to:[{type:"categories"}]
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "author",
    }),
    defineField({
      name: "imageList",
      title: "Image List",
      type: "array",
      of: [{ type: "customImage" }],
    }),
  ],
};
