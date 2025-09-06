

export interface newsLocal {
  _id: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string; // ISO date string
  source: string;
  categories: string[];
  relevance_score: number | null;
}
    export interface newsItems{
        items:newsLocal;
    }