import BlogCard from "@/components/BlogCard";
import NoBlogPost from "@/components/NoBlogPost";

import { useEffect, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const AllBlog = () => {
  const [blogData, setBlogData] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetchBlog Data from sanity
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fetchBlogs");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    // Category Data from sanity
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/fetchCategories"
        );
        const categoryList = await response.json();
        setCategory(categoryList);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
    fetchCategory();
  }, []);

  // remove popup
  const removePopup = () => {
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  // set the category to filter the data
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowPopup(true);
    removePopup();
  };

  const handleShowAllCategory = () => {
    // remove filter
    setSelectedCategory(null);

    // Popup on select category
    setShowPopup(true);
    // hide popup after 4 sec
    removePopup();
  };

  let filteredBlogData;

  if (selectedCategory === null || selectedCategory === undefined) {
    filteredBlogData = blogData;
  } else {
    filteredBlogData = blogData.filter((item) =>
      item.categoryList.some((cate) => cate.title === selectedCategory)
    );
  }

  // searchfunction
  const handleSerchBlog = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedFilterData = blogData?.filter((item) =>
    item.title
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchTerm.toLowerCase().replace(/\s/g, ""))
  );

  return (
    <div className="relative bg-white   ">
      {/* category */}
      <div className="w-full mb-2 sticky top-0 backdrop-blur-[2rem] shadow-xl py-2 ">
        <div className="flex items-center justify-between  mx-auto max-w-7xl px-2">
          <ul className="flex w-full  ">
            {category &&
              category.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleCategoryChange(item.title)}
                    className={`
                px-[1rem] py-[0.5rem]   border
                ${
                  selectedCategory === item.title
                    ? "bg-black text-white"
                    : "bg-green-200 text-black"
                }
                `}>
                    {item?.title}
                  </li>
                );
              })}
            <li
              onClick={handleShowAllCategory}
              className={`
          px-[1rem] py-[0.5rem]   border
          ${
            selectedCategory == null
              ? "bg-black text-white"
              : "bg-green-200 text-black"
          }
          `}>
              all Category
            </li>
          </ul>

          {/* searchBar */}
          <div className="w-full">
            <input
              type="search"
              className="bg-black/5 w-full outline-none p-2"
              placeholder="Please search somthing ... "
              value={searchTerm}
              onChange={handleSerchBlog}
            />
          </div>
        </div>
      </div>

      {/* blogs */}
      <div className="grid grid-cols-3 place-content-start mx-auto max-w-7xl px-2  gap-4">
        {searchTerm === "" && filteredBlogData?.length > 0
          ? filteredBlogData.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  item={item}
                  handleCategoryChange={handleCategoryChange}
                />
              );
            })
          : searchTerm === "" && <NoBlogPost />}
        {searchTerm !== "" && searchedFilterData.length > 0
          ? searchedFilterData.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  item={item}
                  handleCategoryChange={handleCategoryChange}
                />
              );
            })
          : searchTerm !== "" && <NoBlogPost />}
      </div>

      {/* popup */}
      {showPopup && (
        <div className="bg-green-200  fixed top-2 left-1/2  -translate-x-1/2 text-center px-[2rem] py-[1rem] shadow-2xl rounded-full flex items-center justify-center gap-2 w-fit">
          <IoCheckmarkDoneSharp /> Your Blogs Are here...
        </div>
      )}
    </div>
  );
};
export default AllBlog;
