import { defineField } from "sanity";
import { sectionColor } from "../../../constants";
import {AiOutlineCheck} from "react-icons/ai"
export default{
    name:"techStoriesSection",
    title:"techStoriesSection",
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
            initialValue: "white",
          }),
          defineField({
            title: 'Important!',
            description: 'all the stories posted automatically',
            name: 'techStoryNote',
            type: 'note',
            options: {
              icon: () => <AiOutlineCheck size={20} weight="duotone" />,
              tone: 'caution',
            },
          }),

        defineField({
            name:"title",
            title:"Title",
            type:"string"
        }),
        defineField({
          name:"button",
          title:"Button",
          type:"customButton"  
        })
    ]
}