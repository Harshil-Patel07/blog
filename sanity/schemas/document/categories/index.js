import { defineField } from "sanity";

export default{
    name:"categories",
    title:"Categories",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string"
        }),
        defineField({
            name:"categoryLink",
            title:"categoryLink",
            type:"slug"
        }),
        defineField({
            name:"categoryImage",
            title:"Image",
            type:"image"
        })
    ]
}