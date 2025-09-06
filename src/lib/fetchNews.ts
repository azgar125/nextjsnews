import { newsLocal } from "@/app/type/newslocal";

export const fetchNews = async (category: string = '', search: string = '') => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/mdalmamunit427/news-api-next-js/main/data/db.json",
      { cache: "no-store" } // SSR এর জন্য ভালো হবে
    );

    if (!response.ok) {
      throw new Error(`HTTP error ! status: ${response.status}`);
    }

    const data = await response.json();

    // filter by category & search
    let filteredData = data;

    if (category) {
      filteredData = filteredData.filter((item: newsLocal) =>
        item.categories?.some(
          (cat: string) => cat.toLowerCase() === category.toLowerCase()
        )
      );
    }

    if (search) {
      filteredData = filteredData.filter((item: newsLocal) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredData; // ✅ এই return অবশ্যই দরকার
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // error হলে empty array রিটার্ন করবে
  }
};
