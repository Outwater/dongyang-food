import productAPI from "./product";
import userAPI from "./user";
import seoAPI from "./seo";

export default {
  ...productAPI,
  ...userAPI,
  ...seoAPI,
};
