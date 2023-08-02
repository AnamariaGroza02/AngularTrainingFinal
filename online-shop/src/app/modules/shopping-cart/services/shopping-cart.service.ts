// shopping-cart.service.ts
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: IProduct[] = [];

  addToCart(product: IProduct): void {
    this.cartItems.push(product);
  }

  getCartItems(): IProduct[] {
    return this.cartItems;
  }
}
