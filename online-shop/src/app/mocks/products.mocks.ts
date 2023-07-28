import { IProduct } from '../types/products.types';

export function getProductDetailsMock(name = 'product1'): IProduct {
  return {
    name: name,
    category: 'default category',
    price: 10,
    description: 'lorem ipsum',
    quantity: 5,
  };
}

export function getProductDetailsList(numberOfProducts: number): IProduct[] {
  const products = [];
  for (
    let productNumber = 0;
    productNumber < numberOfProducts;
    productNumber++
  ) {
    products.push(getProductDetailsMock(`product${productNumber}`));
  }
  return products;
}
