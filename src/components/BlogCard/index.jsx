import React from "react";
import { RichText } from "@/components/RichText";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const BlogCard = ({ item, handleCategoryChange }) => {
  const {
    title,
    publishDate,
    description,
    categoryList,
    _id,
    heroImage,
    slug,
  } = item || {};

  const handleClickCategory = (category) => {
    handleCategoryChange(category);
  };

  return (
    <div
      key={_id}
      className="m-auto p-[1rem] border h-full w-full rounded-lg hover:shadow-lg shadow-inner">
      <img
        src={heroImage?.image}
        alt={heroImage?.altText}
        className="w-full max-h-[20rem] rounded-md"
      />
      <Link href={`blog/${slug}`} className="bg-green-200">
        {title}
      </Link>
      <PortableText value={description} components={RichText} />
      <span>{publishDate}</span>
      <Link href={`blog/${slug}`} className="bg-blue-200">
        Read More
      </Link>

      <ul className="flex gap-[1rem] p-4">
        {categoryList &&
          categoryList.map((category) => {
            return (
              <li
                key={category?._id}
                className="bg-red-100 flex flex-row-reverse p-2 items-center gap-[1rem]"
                onClick={() => handleClickCategory(category?.title)}>
                {category?.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogCard;
