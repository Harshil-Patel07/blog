import { groq } from "next-sanity";

import React from "react";
import { pageQuery } from "@/lib/pageQuery";
import { client } from "../../../sanity/lib/client";

async function getPage() {

  const data = await client.fetch(pageQuery)
  return data;
}

const About:React.FC = async() => {
  const data =await  getPage()

  return <div>
 {
  data.filter((item: { slug: { current: string; }; })=>item.slug.current==="about").map((item:any)=>{
    const {title,slug,pageBuilder}=item || {}
    console.log(item)
    return (
      <>
  hello
      </>
    )
  })
 }
  </div>;
};

export default About;
