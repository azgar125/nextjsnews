"use client"
import React, { useEffect, useState } from "react";
import { newsLocal } from "@/app/type/newslocal";
import { fetchNews } from "@/lib/fetchNews";
import CardSection from "../CardSection";
import SearchSection from "./SearchSection";
import CategorySection from "./CategorySection";

const NewsList = () => {
  const [news, setNews] = useState<newsLocal[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const faceNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    faceNews();
  }, [category, search]);

  console.log(news);
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10  items-center ">
        {/* ✅ এখন ঠিকভাবে ফাংশন পাঠানো হচ্ছে */}
        <SearchSection onserch={setSearch} />
        <CategorySection changecategory={setCategory} />
      </div>
       {news.length === 0 ? (
        <div className="text-center text-red-500 font-semibold py-10">
          Your Search item not found ❌
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
          {news.map((items) => (
            <CardSection key={items._id} items={items} />
          ))}
        </div>
      )}
      
    </>
  );
};

export default NewsList;
