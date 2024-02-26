import { defineField } from "sanity";

export default {
    name: "codeText",
    title: "Code Text",
    type: "object",
    fields: [
        defineField({
            name: "text",
            title: "Text",
            type: "text"
        })
    ]
}