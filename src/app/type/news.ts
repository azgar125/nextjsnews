
export interface NewsType {
  // source: {
  //   id: string | null;
  //   name: string;
  // };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

export interface itemsType{
 items:NewsType
}