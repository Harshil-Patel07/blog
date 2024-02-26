import Image from "next/image";
import Link from "next/link";

const CategoriesListeningSection = ({ block }) => {
  const { title, allCategories } = block || {};
  return (
    <div>
      <h2>{title}</h2>

      <ul className="flex flex-col gap-[1rem]">
        {allCategories &&
          allCategories.map((item, index) => {
            const {title,categoryLink,categoryImage}=item || {}
            return (
              <li item={item} key={index} className="flex items-center justify-center w-full gap-[2rem]">
              <Image src={categoryImage} width={100} height={100} alt={categoryImage}/>
                <Link href={categoryLink}>
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CategoriesListeningSection;
