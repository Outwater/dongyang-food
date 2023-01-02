import { StrapiResponse, StrapiListResponse, StrapiImageAttribute } from "./strapi";

export interface CategoryAttribute {
  name: string;
  code: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products?: StrapiListResponse<StrapiResponse<ProductAttribute>>;
  sub_categories?: StrapiListResponse<SubCategoryAttribute>;
}

export interface SubCategoryAttribute {
  name: string;
  code: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductAttribute {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  stock: number;
  status: "selling" | "stop" | "soldout";
  category: StrapiResponse<CategoryAttribute>;
  sub_category: StrapiResponse<SubCategoryAttribute>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: StrapiResponse<StrapiImageAttribute>;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryCode: number;
  categoryName: string;
  subCategoryCode: number;
  subCategoryName: string;
  status: "selling" | "stop" | "soldout";
  stock: number;
}

export interface Products {
  isEmpty: boolean;
  productList: Product[];
}
