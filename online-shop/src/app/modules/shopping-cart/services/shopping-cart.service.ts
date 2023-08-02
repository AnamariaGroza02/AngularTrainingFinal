import { Injectable } from '@angular/core';
import { getCartProductsMock } from 'src/app/mocks/products.mocks';
import { ProductsService } from 'src/app/services/products.service';
import { ICart, ICartItem } from 'src/app/types/cart.types';
import { IProduct } from 'src/app/types/products.types';
import { ShoppingCartDetail } from 'src/app/types/shoppingCart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartKey = 'cart';
  constructor(private productService: ProductsService) {}

  private getCartFromLocalStorage(): ICart {
    const cartData = localStorage.getItem(this.cartKey);
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      return { items: [] };
    }
  }

  private saveCartToLocalStorage(cart: ICart): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  getCartItems(): ICartItem[] {
    return this.getCartFromLocalStorage().items;
  }

  addProductToCart(product: IProduct): void {
    const cart = this.getCartFromLocalStorage();
    console.log(cart);
    const existingItem = cart.items.find(item => item.id === product.productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ id: product.productId, quantity: 1 });
    }
    this.saveCartToLocalStorage(cart);
  }

  //TODO : check this after connecting with the backend
  deleteProductFromCart(productId: string): void {
    const cart = this.getCartFromLocalStorage();
    cart.items = cart.items.filter(item => item.id !== productId);
    this.saveCartToLocalStorage(cart);
  }

  getShoppingCartList(): ShoppingCartDetail[] {
    const shoppingCartList = JSON.parse(
      localStorage.getItem(this.cartKey) || '[]'
    );
    const shoppingCartProducts: ShoppingCartDetail[] = [];

    this.productService.getProducts().subscribe(data => {
      data.forEach(item => {
        for (let i = 0; i < shoppingCartList.items.length; i++) {
          if (item.productId == shoppingCartList.items[i].id) {
            shoppingCartProducts.push({
              id: item.productId,
              name: item.productName,
              description: item.productDescription,
              categoryName: item.categoryName,
              price: item.price,
              quantity: shoppingCartList.items[i].quantity,
            });
          }
        }
      });
    });
    return shoppingCartProducts;
  }
}
