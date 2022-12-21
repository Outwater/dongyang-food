interface CategoryResponse {
  data: {
    id: number;
    attributes: CategoryAttribute;
  };
}
interface CategoryAttribute {
  name: string;
  code: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface SubCategoryResponse {
  data: {
    id: number;
    attributes: SubCategoryAttribute;
  };
}
interface SubCategoryAttribute {
  name: string;
  code: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiImage {
  id: number;
  attributes: StrapiImageAttribute;
}
interface StrapiImageAttribute {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  formats: {
    thumbnail: StrapiImageFormatType;
    small: StrapiImageFormatType;
    medium: StrapiImageFormatType;
    large: StrapiImageFormatType;
  };
}
interface StrapiImageFormatType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ProductResponse {
  id: number;
  attributes: ProductAttribute;
}
interface ProductAttribute {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  stock: number;
  status: "selling" | "stop" | "soldout";
  category: CategoryResponse;
  sub_category: SubCategoryResponse;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: null | StrapiImage;
  };
}

interface StrapiPagenation {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProductListResponse {
  data: Array<ProductResponse>;
  meta: {
    pagenation: StrapiPagenation;
  };
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
