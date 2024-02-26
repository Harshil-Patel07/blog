import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ block }) => {
  const { logoImage, navList } = block || {};
  const { hasLink, altText, link, image } = logoImage || {};
  return (
    <div className="flex items-center justify-center w-full">
      <div>
        {hasLink && (
          <Link href={link.slug}>
            {image && (
              <Image
                src={image}
                width={50}
                height={20}
                alt={altText}
                className="max-h-[30px] "
              />
            )}
          </Link>
        )}
      </div>
      <div className="flex items-center justify-center gap-[1rem] w-full">
        {navList &&
          navList.map((nav,index) => {
            const { label, slug } = nav?.link || {};
            return (
                link && <Link href={slug} key={index} className="bg-[grey]" >{label}</Link>
            );
          })}
      </div>
    </div>
  );
};

export default Header;
