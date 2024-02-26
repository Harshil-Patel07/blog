import React from "react";
import Link from "next/link"
const TechStoriesSection = ({ block }) => {
  const { _key, sectionColor, title, button } = block || {};
  return (
    <div>
      <h2>{title && title}</h2>

      <Link className="bg-[red]"  href={button.slug}>{button.label}</Link>
    </div>
  );
};

export default TechStoriesSection;
