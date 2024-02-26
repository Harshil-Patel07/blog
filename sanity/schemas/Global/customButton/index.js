import { defineField } from "sanity";
import { buttons } from "../../../constants";

export default{
    name:"customButton",
    title:"button",
    type:"object",
    fields:[
        defineField({
            name: "variant",
            title: "Variant",
            type: "string",
            description: "select one from it",
            options: {
              list: buttons,
              layout: "radio",
              direction: "horizontal",
      
            },
            initialValue: "orange"
          }),
          defineField({
            name:"label",
            title:"Label",
            type:"string",
          }),
          defineField({
            name:"slug",
            title:"slug",
            type:"slug"
          })
    ]
}