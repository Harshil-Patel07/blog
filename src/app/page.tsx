import { client } from "../../sanity/lib/client";
import { pageQuery } from "@/lib/pageQuery";
import BlogHeroSection from "@/components/BlogHeroSection";
import React from "react";

interface PageData {
  _id: string;
  slug: {
    current: string;
  };
  pageBuilder: {
    content: {
      _type: string;
    }[];
  }[];
}

async function getPage() {
  const data = await client.fetch(pageQuery);
  return data;
}

const Home: React.FC<PageData> = async () => {
  const pageData = await getPage();
  return (
    <div>
      {pageData
        .filter((block: { slug: string }) => block.slug === "/")
        .map((block: { _id: React.Key | null | undefined; pageBuilder: { content: any[]; }[]; }) => (
          <React.Fragment key={block._id}>
            {block.pageBuilder &&
              block.pageBuilder.map((section: { content: any[]; }, index:number) => (
                <React.Fragment key={index}>
                  {section.content &&
                    section.content.map((data, dataIndex:number) => {
                      const { _type } = data;
                      console.log(data)
                      switch (_type) {
                        case "blogHeroSection":
                          return <BlogHeroSection key={dataIndex} data={data} />;
                        default:
                          return null;
                      }
                    })}
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}



    </div>
  );
};

export default Home;
