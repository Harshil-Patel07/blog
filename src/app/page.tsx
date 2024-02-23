import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import React from "react";
import { pageQuery } from "@/lib/pageQuery";

async function getPage() {

  const data = await client.fetch(pageQuery)
  return data;
}

const Home:React.FC = async() => {
  const data =await  getPage()

  return <div>
 {
  data.filter((item: { slug: { current: string; }; })=>item.slug.current==="/").map((item:any)=>{
    const {title,slug,pageBuilder}=item || {}
    console.log(item)
    return (
      <>
      {title}
      </>
    )
  })
 }
  </div>;
};

export default Home;
