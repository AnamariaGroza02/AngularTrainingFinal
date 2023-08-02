import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss'],
})
export class ProductDetailsViewComponent {
  @Input() productDetails: IProduct | undefined;

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(): void {
    if (this.productDetails) {
      this.shoppingCartService.addProductToCart(this.productDetails);
      window.alert('Your product has been added to the cart!');
    }
  }
  deleteProduct(): void {
    return;
  }

}
