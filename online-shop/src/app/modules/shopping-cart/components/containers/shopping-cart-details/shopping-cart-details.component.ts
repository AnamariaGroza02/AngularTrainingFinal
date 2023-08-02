import { Component, OnInit } from '@angular/core';
import { getProductsDetailsListMock } from 'src/app/mocks/products.mocks';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { IProduct } from 'src/app/types/products.types';
import { ICartItem } from 'src/app/types/cart.types';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent implements OnInit {
  // products = this.cartService.getCartItems();
  items: ICartItem[] = [];
  //TODO you should return a list of products to shopping-cart-details-component . So you have to do the mapping
  // map from a list of cartItems to a list of products that will be injected in the shopping-cart-details-component
  //decomment the shopping-cart-details-component

  constructor(private cartService: ShoppingCartService) {}
  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }

  addToCart(product: IProduct) {
    this.cartService.addProductToCart(product);
    this.items = this.cartService.getCartItems(); //TODO: apeleaza product service sa faca maparea din  product in cartitem
  }

  removeFromCart(productId: string) {
    this.cartService.deleteProductFromCart(productId);
    this.items = this.cartService.getCartItems(); // Update the products after removing from cart
  }
}
