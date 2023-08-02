import { Injectable } from '@angular/core';
import { getCartProductsMock } from 'src/app/mocks/products.mocks';
import { ICart, ICartItem } from 'src/app/types/cart.types';
import { IProduct } from 'src/app/types/products.types';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {

  private cartKey = 'cart';

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
    const existingItem = cart.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ id: product.id, quantity: 1 });
    }
    this.saveCartToLocalStorage(cart);
  }

  //TODO : check this after connecting with the backend
  deleteProductFromCart(productId: string): void {
    const cart = this.getCartFromLocalStorage();
    cart.items = cart.items.filter(item => item.id !== productId);
    this.saveCartToLocalStorage(cart);
  }
}
