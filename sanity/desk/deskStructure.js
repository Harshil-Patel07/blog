import { AiOutlineGlobal } from "react-icons/ai";
import { structureListType } from "./helper/structure-list-type";
import { HiChat, HiOutlineTerminal } from "react-icons/hi";
import { RiPagesLine, RiGroupLine, RiFunctionFill } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import { InitialValueTemplates } from "./initialValueTemplates";
import { CogIcon } from "@sanity/icons";
import { StructureBuilder, StructureResolver } from "sanity/structure";

export const deskStructure = (S) => {
  const settingsItem = S.listItem()
    .title("settings")
    .icon(CogIcon)
    .child(
      S.editor().id("settings").schemaType("settings").documentId("settings")
    );
  return S.list()
    .title("bloger")
    .items([
      settingsItem,
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              structureListType({
                S,
                type: "section",
                title: "Section",
                icon: HiOutlineTerminal,
              }),
            
            ])
        ),
      S.divider(),
      structureListType({
        S,
        type: "page",
        title: "Page",
        icon: RiPagesLine,
      }),
      S.divider(),
      structureListType({
        S,
        type:"categories",
        title:"Categories",
      }),
      S.divider(),
      structureListType({
        S,
        title: "Tech Stories",
        type: "techStories",
      }),
      S.divider(),
      structureListType({
        S,
        type: "blogs",
        title: "Blogs",
        icon: SiMicrodotblog,
      }),
  
    ]);
};
