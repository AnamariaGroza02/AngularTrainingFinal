import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { IProduct } from 'src/app/types/products.types';
import { ICartItem } from 'src/app/types/cart.types';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartDetail } from 'src/app/types/shoppingCart';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent {
  items: ICartItem[] = this.cartService.getCartItems();
  products: ShoppingCartDetail[] = this.cartService.getShoppingCartList();

  constructor(
    private cartService: ShoppingCartService,
    private productService: ProductsService
  ) {}

  addToCart(product: IProduct): void {
    this.cartService.addProductToCart(product);
    this.items = this.cartService.getCartItems();
    this.products = this.cartService.getShoppingCartList();
  }

  removeFromCart(productId: string): void {
    this.cartService.deleteProductFromCart(productId);
    this.items = this.cartService.getCartItems();
  }
}
