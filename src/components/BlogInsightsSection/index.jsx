import React from "react";
import Link from "next/link";
const BlogInsightsSection = ({ block }) => {
  const { _key, sectionColor, title, button } = block || {};
  return (
    <div>
      <h2>{title && title}</h2>
      <Link className="bg-[orange]" href={button.slug}>
        {button.label}
      </Link>
    </div>
  );
};

export default BlogInsightsSection;
