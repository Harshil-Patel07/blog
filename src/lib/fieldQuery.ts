import { groq } from "next-sanity";

export const contentField = groq`

`;

export const blogHeroSection = groq`
_type,
title,
subTitle,
authorName,
"heroimage": heroimage{
  "url":image.asset->url,
    altText,
  "link":  link{
     label,
       linkType,
       url,
       "slug":slug.current    
  },
    }


`;

export type RichTextType = {
    _type: "richText";
    custom_rich_text?: PortableTextBlock[];
  };

  export type ImageContentType = {
    _type: "imageContent";
    content?: RichTextType;
    image?: CustomImageType;
  };


  import { PortableTextBlock, Slug } from "sanity";

export interface IconProps {
  className?: string;
}
export type ButtonVariantType = "violet" | "white" | "violet-with-arrow" | "purple-with-arrow" | "visit";
export type VideoSelectType = "file" | "url";
export type BackgroundColorSelectType = "skyBlue" | "lavenderPurple";


export type TitleDescriptionImageType = {
  _type: "titleDescriptionImage";
  title?:string
  description?: RichTextType;
  image?: CustomImageType;
};
export type LeaderType = {
  _type: "leader";
  _id?: string;
  name?: string;
  post?: string;
  image?: CustomImageType;
};
export type LabelLinkType = {
  _type: "labelLink";
  label?: string;
  link?: string;
};
export type IconLabelLinkType = {
  _type: "iconLabelLink";
  label?: string;
  link?: string;
  icon?: CustomImageType;
};
export type ServiceCardType = {
  _type: "services";
  _id?: string;
  title?: string;
  slug?: Slug
  image?: CustomImageType;
  description?: RichTextType
};
export type BlogCardType = {
  _type: "blogs";
  _id?: string;
  title?: string;
  authorName?: string;
  publishDate?: string;
  slug?: Slug
  image?: CustomImageType;
  description?: RichTextType
};

export type ButtonType = {
  _type: "button";
  variant?: ButtonVariantType;
  label?: string;
  link?: string;
};
export type TitleDescriptionButtonType = {
  _type: "titleDescriptionButton";
  title?: string;
  description?: RichTextType;
  cta?: ButtonType;
};

export type CustomImageType = {
  _type: "customImage";
  caption?: string;
  alt?: string;
  link?: string;
  image?: ImageType;
};
export type ImageType = {
  _type: "image";
  asset?: {
    _type?: "SanityImageAsset";
    _id?: string;
    path?: string;
    url?: string;
    altText?: string;
    metadata?: {
      _type?: "SanityImageMetadata";
      dimensions?: {
        _type?: "SanityImageDimensions";
        height?: number;
        width?: number;
      };
    };
  };
};
