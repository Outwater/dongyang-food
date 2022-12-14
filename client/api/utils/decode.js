/*
type Product = {
  id: string,
  title: string,
  imageUrl: string,
  price: number,
  description: string,
  categoryName?: string,
  categoryCode?: number,
  subCategoryName?: string,
  subCategoryCode?: number,
  image?: strapiImage
}
*/

export const decodeProductList = (init) => ({
  productList: init.data.map(decodeProduct),
  isEmpty: init.data.length === 0,
});

export const decodeProduct = (init) => {
  return {
    id: init.id,
    title: init.attributes.title,
    imageUrl: init.attributes.image.data?.attributes.url || init.attributes.imageUrl,
    price: init.attributes.price,
    description: init.attributes.description,
    categoryName: init.attributes.category.data?.attributes.name ?? null,
    categoryCode: init.attributes.category.data?.attributes.code ?? null,
    subCategoryName: init.attributes.sub_category.data?.attributes.name ?? null,
    subCategoryCode: init.attributes.sub_category.data?.attributes.code ?? null,
  };
};
