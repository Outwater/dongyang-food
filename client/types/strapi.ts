export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta?: any;
}

export interface StrapiListResponse<T> {
  data: Array<{ id: number; attributes: T }>;
  meta?: {
    pagenation: StrapiPagenation;
  };
}

export interface StrapiImageBasic {
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
export interface StrapiImageAttribute extends StrapiImageBasic {
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  formats?: {
    thumbnail: StrapiImageBasic;
    small: StrapiImageBasic;
    medium: StrapiImageBasic;
    large: StrapiImageBasic;
  };
}

export interface StrapiPagenation {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: StrapiResponse<StrapiImageAttribute>;
}
export interface StrapiPageSeo {
  id: number;
  seo: StrapiSeo;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface StrapiGlobalSeo {
  SiteName: string;
  favicon: StrapiResponse<StrapiImageAttribute>;
  defaultSeo: StrapiSeo;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
