export interface IProduct {
  productId: string;
  productName: string;
  productDescription: string;
  price: number;
  weight?: number;
  imageUrl?: string;
  categoryId?: string;
  categoryName: string;
  categoryDescription?: string;
}
