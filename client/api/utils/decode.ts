import { Product, ProductAttribute } from "client/types/product";
import { StrapiListResponse } from "../../types/strapi";

export const decodeProductList = (init: StrapiListResponse<ProductAttribute>) => ({
  productList: init.data.map(decodeProduct),
  isEmpty: init.data.length === 0,
});

interface ProductInit {
  id: number;
  attributes: ProductAttribute;
}
export const decodeProduct = (init: ProductInit): Product => {
  const { title, imageUrl, price, description, stock, status, image, category, sub_category } =
    init.attributes;

  return {
    id: init.id,
    title: title,
    imageUrl: image.data?.attributes.url || imageUrl,
    price: price,
    description: description,
    stock: stock,
    status: status,
    categoryName: category.data?.attributes.name ?? null,
    categoryCode: category.data?.attributes.code ?? null,
    subCategoryName: sub_category.data?.attributes.name ?? null,
    subCategoryCode: sub_category.data?.attributes.code ?? null,
  };
};
