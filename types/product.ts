export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  brand?: string;
  rating: number;
  discountPercentage: number;
  sku: string;
  availabilityStatus: string;
  stock: number;
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
  reviews: ProductReview[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
