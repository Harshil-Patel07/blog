import { defineField } from "sanity";
import { sectionColor } from "../../../constants";
import {AiOutlineCheck} from "react-icons/ai"
export default{
    name:"blogInsightsSection",
    title:"blog Insights Section",
    type:"object",
    fields:[
        defineField({
            name: "sectionColor",
            title: "Section Color",
            type: "string",
            options: {
              list: sectionColor,
              layout: "radio",
              direction: "horizontal",
            },
            initialValue: "orange",
          }),
          defineField({
            name:"title",
            title:"Title",
            type:"string"
          }),
          defineField({
            title: 'Important!',
            description: 'a custom Message...',
            name: 'myCustomNote',
            type: 'note',
            options: {
              icon: () => <AiOutlineCheck size={20} weight="duotone" />,
              tone: 'caution',
            },
          }),
          defineField({
            name:"button",
            title:"Button",
            type:"customButton"
          })
    ]
}