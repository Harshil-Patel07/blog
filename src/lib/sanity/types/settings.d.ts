import { PortableTextBlock } from "sanity";
import { ButtonType, CustomImageType, IconLabelLinkType, LabelLinkType, RichTextType } from "./common";

export interface NavItemsType {
  _type: "navItem";
  title?: string;
  link?: string;
}
export interface FooterLinksType {
  _type: "footerLinkBlock";
  title?: string;
  labelLinks?: LabelLinkType[];
}
export interface TopHeaderDataType {
  _type: "settings";
  annoucementTitle?: string[];
  connectWithUs: IconLabelLinkType[]
}

export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  navItems: NavItemsType[];
  contactLabel: ButtonType
  cta: ButtonType
  ourTherapies: ButtonType
  connectWithUs: IconLabelLinkType[]
  topHeaderData?:TopHeaderDataType
}
export interface FooterType {
  _type: "footer";
  logo?: CustomImageType;
  footerLinks: FooterLinksType[];
  bottomDescription: string
  bottomLinks: LabelLinkType[]
  content: RichTextType
}

export type MetaAttributeType = {
  _type: "metaAttribute";
  attributeKey?: string;
  attributeType?: string;
  attributeValueString?: string;
  attributeValueImage?: CustomImageType;
};

export type OpenGraphType = {
  _type: "openGraph";
  title: string;
  description: string;
  image: CustomImageType;
};

export type Twitter = {
  _type: "twitter";
  handle?: string;
  site?: string;
  cardType?: string;
};

export type MetaTagType = {
  _type: "metaTag";
  metaAttributes?: MetaAttributeType[];
};

export type SeoType = {
  _type?: "seo";
  metaDescription?: string;
  additionalMetaTags?: MetaTagType[];
  metaTitle?: string;
  openGraph?: OpenGraphType;
  twitter?: Twitter;
};
