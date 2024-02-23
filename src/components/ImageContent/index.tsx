import React from 'react'
import { ImageContentType } from '../../../../lib/sanity/types'
import CustomImage from '../CustomImage'
import RichText from '../RichText'
export interface ImageContentProps {
    block: ImageContentType
}
const ImageContent: React.FC<ImageContentProps> = ({ block }) => {
    const { content, image } = block || {}
    return (
        <li className="flex flex-row gap-5 lg:gap-0 lg:flex-col lg:items-start items-center">
            {image && (
                <CustomImage
                    block={image}
                    className="lg:w-[5.938rem] w-[3.688rem] lg:h-[5.938rem] h-[3.688rem]"
                />
            )}
            {content?.custom_rich_text && (
                <div className="text-sm md:text-base font-normal text-[#101828] leading-[1.328rem] md:leading-[1.2] lg:pt-6 text-left">
                    <RichText block={content} />
                </div>
            )}
        </li>
    )
}

export default ImageContent
