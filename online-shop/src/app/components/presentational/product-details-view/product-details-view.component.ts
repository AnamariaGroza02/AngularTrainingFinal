import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss'],
})
export class ProductDetailsViewComponent {
  @Input() productDetails: IProduct | undefined;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductsService,
    private router: Router
  ) {}

  addToCart(): void {
    if (this.productDetails) {
      this.shoppingCartService.addProductToCart(this.productDetails);
      window.alert('Your product has been added to the cart!');
    }
  }
  deleteProduct(): void {
    if (this.productDetails) {
      this.productService
        .deleteProduct(this.productDetails.productId)
        .subscribe(() => window.alert('Your product has been deleted cart!'));
      this.router.navigate(['/products']);
    }
  }
}
