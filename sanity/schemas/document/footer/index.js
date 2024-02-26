import { defineField } from "sanity";

export default{
    name:"footer",
    title:'Footer',
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string"
        }),
        defineField({
            name:"links",
            title:"Links",
            type:"array",
            of:[{type:"customLink"}]
        }),
        defineField({
            name:"socialLinks",
            title:"Social Links",
            type:"array",
            of:[{type:"customLink"}]
        })
    ]
}