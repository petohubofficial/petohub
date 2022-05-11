export enum Placeholder {
  BRAND = "brand",
  CATEGORY = "category",
  PRODUCT = "product",
  SERVICE = "service",
  STORE = "store",
  USER = "user",
}

export default function placeholder(type: Placeholder): string {
  switch (type) {
    case Placeholder.BRAND:
      return "/assets/placeholders/brand.png";
    case Placeholder.CATEGORY:
      return "/assets/placeholders/category.png";
    case Placeholder.PRODUCT:
      return "/assets/placeholders/product.png";
    case Placeholder.SERVICE:
      return "/assets/placeholders/service.png";
    case Placeholder.STORE:
      return "/assets/placeholders/store.png";
    case Placeholder.USER:
      return "/assets/placeholders/portrait.png";
    default:
      return "/assets/placeholders/placeholder.png";
  }
}
