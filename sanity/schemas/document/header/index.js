import { defineField } from "sanity";

export default{
    name:"header",
    title:'Header',
    type:"document",
    fields:[
        defineField({
            name:"logoImage",
            title:"Logo Image",
            type:"customImage",
        }),
        defineField({
            name:"navList",
            title:"NavList",
            type:"array",
            of:[
                {type:"navItem"}
            ]
        }),
        defineField({
            name:"socialLinks",
            title:"Social Links",
            type:"array",
            of:[{type:"customLink"}]
        })
    ]
}