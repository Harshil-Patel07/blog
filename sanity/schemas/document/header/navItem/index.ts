import { defineField } from "sanity";

export default{
    name:"navItem",
    title:"navItem",
    type:"object",
    fields:[
        defineField({
            name:"link",
            title:"Link",
            type:"customLink"
        })
    ]
}