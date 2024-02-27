import { RichText } from "@/components/RichText";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const AllBlog = () => {
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
  return (
    <div className="">
      {blogData &&
        blogData.map((item) => {
          const {
            title,
            publishDate,
            description,
            categoryList,
            _id,
            heroImage,
            slug,
          } = item || {};
          console.log(slug);
          return (
            <div key={_id} className="max-w-7xl m-auto px-[2rem]">
              <Link href={`blog/${slug}`} className="bg-green-200">
                {title}
              </Link>
              <PortableText value={description} components={RichText} />
              <span>{publishDate}</span>
              <Link href={`blog/${slug}`} className="bg-blue-200">
                Read More
              </Link>

              <img
                src={heroImage?.image}
                alt={heroImage?.altText}
                className=" w-full max-h-[32rem] "
              />

              <ul className="flex gap-[1rem] p-4">
                {categoryList &&
                  categoryList.map((category) => {
                    return (
                      <li
                        key={category?._id}
                        className="bg-red-100 flex flex-row-reverse p-2 items-center gap-[1rem]">
                        {category?.title}
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default AllBlog;
