import Image from "next/image";
import { fetchNews } from "@/lib/fetchNews";
import { Metadata } from "next";
import { newsLocal } from "@/app/type/newslocal";

// প্রতি ৬০ সেকেন্ডে পুনরায় ভ্যালিডেট হবে
export const revalidate = 60;
export const dynamicParams = true;

// ✅ টাইপ ডিফাইন - Next.js 15 এর জন্য আপডেট করা
type NewsParams = {
  params: Promise<{
    id: string;
  }>;
};

// প্রথম ৫টি নিউজ স্ট্যাটিকভাবে জেনারেট করা
export async function generateStaticParams() {
  const allNews: newsLocal[] = await fetchNews();
  return allNews.slice(0, 5).map((item) => ({
    id: item._id,
  }));
}

// ✅ SEO Metadata - Next.js 15 এর জন্য আপডেট করা
export async function generateMetadata({ params }: NewsParams): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `News Details - ${id}`,
    description: `Details of news ${id}`,
  };
}

// ✅ মূল কম্পোনেন্ট - Next.js 15 এর জন্য আপডেট করা
const NewsDetails = async ({ params }: NewsParams) => {
  // params কে await করুন
  const { id } = await params;

  const allNews = await fetchNews();
  const newsItem = allNews.find((item: newsLocal) => item._id === id);

  if (!newsItem) {
    return (
      <div className="text-center text-red-500 py-10">
        ❌ Your search item not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-5">News Details</h1>

      <div className="flex flex-col gap-5 justify-center items-center mt-5 mb-10">
        <Image
          src={newsItem.imageUrl}
          alt="News Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
        <h2 className="text-2xl font-semibold py-1 text-center">{newsItem.title}</h2>

        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <p>{new Date(newsItem.published_at).toLocaleDateString()}</p>
          <p>Source: {newsItem.source}</p>
        </div>

        <div className="text-lg leading-relaxed px-5 md:px-20">
          <p className="mb-3">{newsItem.description}</p>
          <p className="text-gray-700">{newsItem.snippet}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;






// import Image from "next/image";
// import { fetchNews } from "@/lib/fetchNews";
// import { Metadata } from "next";
// import { newsLocal } from "@/app/type/newslocal";

// // প্রতি ৬০ সেকেন্ডে পুনরায় ভ্যালিডেট হবে
// export const revalidate = 60;
// // ডায়নামিক প্যারামস অনুমোদিত
// export const dynamicParams = true;

// // প্যারামসের টাইপ ডিক্লেয়ারেশন
// type NewsPageProps = {
//   params: { id: string };
// };

// // প্রথম ৫টি নিউজ স্ট্যাটিকভাবে জেনারেট করা
// export async function generateStaticParams() {
//   const allNews: newsLocal[] = await fetchNews();
//   return allNews.slice(0, 5).map((item) => ({
//     id: item._id,
//   }));
// }

// // SEO-এর জন্য মেটাডেটা জেনারেট করা
// export async function generateMetadata(props: NewsPageProps): Promise<Metadata> {
//   const { id } = await props.params; // await লাগানো হলো
//   return {
//     title: `News Details - ${id}`,
//     description: `Details of news ${id}`,
//   };
// }

// // মূল কম্পোনেন্ট
// const NewsDetails = async (props: NewsPageProps) => {
//   const { id } = await props.params; // await লাগানো হলো

//   // সব নিউজ ডেটা fetch করা
//   const allNews = await fetchNews();
//   // URL-এর id অনুযায়ী সঠিক নিউজ আইটেম খুঁজে বের করা
//   const newsItem = allNews.find((item: newsLocal) => item._id === id);

//   // যদি নিউজ না পাওয়া যায়
//   if (!newsItem) {
//     return (
//       <div className="text-center text-red-500 py-10">
//         ❌ Your search item not found
//       </div>
//     );
//   }

//   // নিউজ ডিটেইলস প্রদর্শন
//   return (
//     <div className="container">
//       <h1 className="text-3xl font-bold text-center my-5">News Details</h1>

//       <div className="flex flex-col gap-5 justify-center items-center mt-5 mb-10">
//         <Image
//           src={newsItem.imageUrl}
//           alt="News Image"
//           width={600}
//           height={400}
//           className="rounded-lg shadow-lg"
//         />
//         <h2 className="text-2xl font-semibold py-1">{newsItem.title}</h2>

//         <div className="flex items-center gap-4 text-gray-600 text-sm">
//           <p>{new Date(newsItem.published_at).toLocaleDateString()}</p>
//           <p>{newsItem.source}</p>
//         </div>

//         <div className="text-lg leading-relaxed px-5 md:px-20">
//           <p className="mb-3">{newsItem.description}</p>
//           <p>{newsItem.snippet}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsDetails;
