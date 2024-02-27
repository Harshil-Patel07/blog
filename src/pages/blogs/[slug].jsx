import { RichText } from "@/components/RichText";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fetchBlogs");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const param = useRouter();

  return (
    <div className="">
      {blogData &&
        blogData
          .filter((item) => item.slug === param.query.slug)
          .map((item) => {
            const {
              title,
              publishDate,
              description,
              content,
              categoryList,
              _id,
              heroImage,
              isPopulare,
              author,
            } = item || {};
            return (
              <div key={_id} className="max-w-7xl m-auto px-[2rem]">
                <h2>{title}</h2>
                <PortableText value={description} components={RichText} />
                <span>{publishDate}</span>
                <div>
                  <img
                    src={heroImage?.image}
                    alt={heroImage?.altText}
                    className=" w-full max-h-[32rem] "
                  />
                  <div>
                    {author && (
                      <div>
                        <p>{author.name}</p>
                        <img src={author.image} alt="image" />
                      </div>
                    )}
                  </div>
                </div>
                <ul className="flex gap-[1rem] p-4">
                  {categoryList &&
                    categoryList.map((category) => {
                      return (
                        <li
                          key={category?._id}
                          className="bg-red-100 flex flex-row-reverse p-2 items-center gap-[1rem]">
                          {category?.title}
                          <img
                            src={category?.categoryImage?.image}
                            alt={category?.altText}
                            className="max-w-[3rem]"
                          />
                        </li>
                      );
                    })}
                </ul>
                <div className="[&>p>code]:bg-[red]">
                  <PortableText value={content} components={RichText} />
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default BlogPage;
