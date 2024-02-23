import CodeHeading from "@/components/CodeHeading";
import SectionHeading from "@/components/SectionHeading";


export default {
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [
    {
      name: "custom_rich_text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading1", value: "h1" },
            { title: "Heading2", value: "h2" },
            { title: "Heading3", value: "h3" },
            { title: "Heading4", value: "h4" },
            { title: "Heading5", value: "h5" },
            { title: "Heading6", value: "h6" },
            { title: "Quote", value: "blockquote" },
            {
              title: "Section Heading",
              value: "section-heading",
              component: SectionHeading,
            },
            {
              title: "Code Heading",
              value: "code-heading",
              component: CodeHeading,
            },
          ],
          // marks: {
          //   annotations: [
          //     {
          //       name: "color",
          //       title: "Color",
          //       type: "color",
          //     },
          //     {
          //       name: "link",
          //       type: "customLink",
          //       title: "Link",
          //     },
          //   ],
          // },
        },
        { type: "customImage" },
      ],
    },
  ],
};
