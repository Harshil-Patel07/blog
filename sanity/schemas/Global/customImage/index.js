import { defineField } from "sanity";

export default {
  name: "customImage",
  title: "customImage",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "altText",
      title: "Alt",
      type: "string",
      description: "please add the alternative text !",
      hidden: ({ parent }) => !parent?.image,
    }),
    defineField({
      name: "hasLink",
      title: "HasLink",
      type: "boolean",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "object",
      hidden: ({ parent }) => parent?.hasLink !== true,
      fields: [
        defineField({
          name: "slug",
          title: "slug",
          type: "slug",
        }),
      ],
    }),
  ],
};
