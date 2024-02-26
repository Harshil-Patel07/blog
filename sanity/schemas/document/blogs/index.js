import { defineField } from "sanity";

export default{
    name:"blogs",
    title:"Blogs",
    type:"document",
    fields:[
        defineField({
            name:'title',
            title:"Title",
            type:"string",
        }),
        defineField( {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 200, 
              slugify: (input) =>
                input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            }
          }),
          defineField({
            name:"isPopulare",
            title:"Is Populare",
            type:"boolean"
          }),
        defineField({
            name:"description",
            title:"Description",
            type:"richText"
        }),

        
        defineField({
            name:"heroImage",
            title:"Hero Image",
            type:"customImage"
        }),
        defineField({
            name:"author",
            title:"Author",
            type:"author"
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"reference",
            to:[{type:"categories"}]
        }),
        defineField({
            name: "publishDate",
            title: "Publish Date",
            type:"date"
        }),
        defineField({
            name:"content",
            title:"Content",
            type:"richText"
        }),
    ]
   
}