import RichText from "../RichText";



const BlogHeroSection = ({ data }: any) => {
  const { title, subTitle, authorName, heroimage, _type } = data || {};
  console.log(subTitle);
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{authorName}</p>
<RichText block={subTitle}/>
      </div>

      <div>
        {heroimage && <img src={heroimage.url} alt={heroimage.altText} />}
      </div>
    </div>
  );
};

export default BlogHeroSection;
