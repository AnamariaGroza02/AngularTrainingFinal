import { IProduct } from '../types/products.types';

export function getProductDetailsMock(name = 'product1'): IProduct {
  return {
    productId: Math.floor(Math.random() * 10000 + 1).toString(),
    productName: name,
    categoryName: 'default category',
    price: 10,
    productDescription: 'lorem ipsum',
  };
}

export function getProductsDetailsListMock(
  numberOfProducts: number
): IProduct[] {
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

export function getCartProductsMock() {
  return [
    {
      product: getProductDetailsMock('p1'),
      quantity: 1,
    },
  ];
}
