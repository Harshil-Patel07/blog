import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginButton from "../LoginButton";

const Header = ({ block }) => {
  const { logoImage, navList, socialLinks } = block || {};
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
                className="max-h-[30px]"
              />
            )}
          </Link>
        )}
      </div>
      <div className="flex items-center justify-center gap-[1rem] w-full">
        {navList &&
          navList.map((nav, index) => {
            const { label, slug } = nav?.link || {};
            return (
              <li key={index}>
                {link && (
                  <Link href={slug} className="bg-[grey]">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
      </div>
      <LoginButton />
      <ul className="bg-red-200">
        {socialLinks &&
          socialLinks.map((link, index) => {
            const { slug, _key, label } = link || {};
            return (
              <li key={index}>
                {link && (
                  <Link href={slug || ""} key={_key}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Header;
