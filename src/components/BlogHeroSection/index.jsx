import Image from 'next/image'
import React from 'react'

const BlogHeroSection = ({block}) => {
    console.log(block)
    const {title,subTitle,authorName,image }=block || {}
   
    
  return (
    <div>
<div>
{title && <h3>{title }</h3>}

{authorName && <p>{authorName}</p>}
</div>
<div>

{
        image &&   <Image src={image.src} width={500} height={500} alt={image.altText} />
      }
</div>
    </div>
  )
}

export default BlogHeroSection