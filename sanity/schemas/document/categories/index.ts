import { defineField } from "sanity";

export default{
    name:"categories",
    title:"Categories",
    type:"document",
    fields:[
        defineField({
            name:"categoryTitle",
            title:"Category Title",
            type:"customLink"
        }),
        defineField({
            name:"categoryImage",
            title:"Image",
            type:"customImage"
        })
    ]
}