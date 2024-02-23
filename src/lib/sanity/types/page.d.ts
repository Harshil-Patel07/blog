import { Slug } from "sanity";
import { FooterType, HeaderType, SeoType } from "./settings";
import {
  LeaderType,
  BackgroundColorSelectType,
  BlogCardType,
  ButtonType,
  CustomImageType,
  ImageContentType,
  MedicineType,
  PatientServiceType,
  RichTextType,
  ServiceCardType,
  TitleDescriptionButtonType,
  TitleDescriptionImageType,
  VideoSelectType,
} from "./common";

export interface LayoutPropsType {
  _id: "settings";
  _type: "settings";
  header?: HeaderType;
  footer?: FooterType;
}

export interface PageBuilderType {
  _type: "section";
  content: SectionType[];
}

export type SectionType =
  | HeroSectionType
  | HomeHeroSectionType
  | OurStorySectionType
  | OurTeamSectionType
  | FeatureSectionType
  | CommunityHealthSectionType
  | CustomerReviewSectionType
  | InnovativeSolutionSectionType
  | VioletHelthSectionType
  | FaqSectionType
  | VisitSectionType
  | InsurancePartnerSectionType
  | BlogListingSectionType;

export interface Page extends SanityDocument {
  slug: string;
  _id: string;
  seo: SeoType;
  layoutProps: LayoutPropsType;
  pageBuilder?: PageBuilderType[];
}
export interface HeroSectionType {
  _type: "heroSection";
  title?: string;
  headline?: string;
  description?: RichTextType;
  image?: CustomImageType;
  cta?: ButtonType;
}
export interface HomeHeroSectionType {
  _type: "homeHeroSection";
  title?: string;
  description?: RichTextType;
  titleDescriptionButtons?: TitleDescriptionButtonType[];
  thumbnail?: CustomImageType;
  videoSelect?: VideoSelectType
  videoFileUrl?: string;
  videoFileExtension?: string;
  videoUrl?: string;
  contactLabel?: ButtonType;
  referAPatient?: ButtonType;
}
export interface VioletHelthSectionType {
  _type: "violetHelthSection";
  title: string;
  description: RichTextType;
  cta?: ButtonType;
  services?: ServiceCardType[];
}
export interface BlogListingSectionType {
  _type: "blogListingSection";
  title: string;
  description: RichTextType;
  blogs?: BlogCardType[];
}
export interface CustomerReviewSectionType {
  _type: "customerReviewSection";
  title: string;
  description: RichTextType;
}
export interface QuestionAndAnswerType {
  _type: "questionAndAnswer";
  question: string;
  answer: RichTextType;
}
export interface FaqSectionType {
  _type: "faqSection";
  title: string;
  description: string;
  questionAndAnswers?: QuestionAndAnswerType[];
}
export interface VisitSectionType {
  _type: "visitSection";
  title: string;
  description: RichTextType;
  cta?: ButtonType;
}
export interface InnovativeSolutionType {
  _type: "innovativeSolution";
  title: string;
  subTitle: string;
  image: CustomImageType;
  description?: RichTextType;
}
export interface InsurancePartnerSectionType {
  _type: "insurancePartnerSection";
  title: string;
  images?: CustomImageType[];
}
export interface InnovativeSolutionSectionType {
  _type: "innovativeSolutionSection";
  title: string;
  innovativeSolutionDetails?: InnovativeSolutionType[];
}
export interface OurStorySectionType {
  _type: "ourStorySection";
  title: string;
  headline: string;
  image?: CustomImageType;
  imageContents?: ImageContentType[];
}
export interface OurTeamSectionType {
  _type: "ourTeamSection";
  title: string;
  headline: string;
  description?: RichTextType;
  leaders?: LeaderType[];
}
export interface CommunityHealthSectionType {
  _type: "communityHealthSection";
  title: string;
  description?: RichTextType;
  images?: CustomImageType[];
}
export interface FeatureSectionType {
  _type: "featureSection";
  title: string;
  backgroundColorSelect?: BackgroundColorSelectType;
  titleDescriptionImages?: TitleDescriptionImageType[];
}
