const BlogHeroSection = ({data}:any) => {
    const {title,subTitle,authorName,heroimage,_type}=data || {}
console.log(heroimage.altText)
  return (
    <div>
      <div>   
        <p>{title}</p>
        <p>{authorName}</p>
      
      </div>
      
      <div>
     
      {heroimage &&  <img src={heroimage.url} alt={heroimage.altText} />}
      
      </div>
    </div>
  )
}

export default BlogHeroSection