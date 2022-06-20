export interface StoreAPIResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  longDescription: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
