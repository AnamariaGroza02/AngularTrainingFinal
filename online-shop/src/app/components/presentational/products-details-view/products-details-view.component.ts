import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss'],
})
export class ProductsDetailsViewComponent {
  @Input() productDetails: IProduct | undefined;

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(): void {
    if (this.productDetails) {
      this.shoppingCartService.addToCart(this.productDetails);
    }
  }
}
