import { IProduct } from '../types/products.types';

export function getProductDetailsMock(name = 'product1'): IProduct {
  return {
    id: Math.floor(Math.random() * 10000 + 1).toString(),
    name: name,
    category: 'default category',
    price: 10,
    description: 'lorem ipsum',
    quantity: 5,
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
