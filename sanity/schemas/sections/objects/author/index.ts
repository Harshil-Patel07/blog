import { SchemaTypeDefinition, defineField } from "sanity";

export default{
    name:"author",
    title:"Author",
    type:"object",
    fields:[
        defineField({
            name:"authorName",
            title:"Author Name",
            type:"string"
        }),
        defineField({
            name:"authorImage",
            title:"Author Image",
            type:"customImage"
        })
    ]
} as SchemaTypeDefinition