import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss'],
})
export class ProductDetailsViewComponent implements OnInit {
  @Input() productDetails$?: Observable<IProduct>;
  productDetails!: IProduct;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productDetails$?.subscribe(s => (this.productDetails = s));
  }

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
        .subscribe(() => window.alert('Your product has been deleted!'));
      this.router.navigate(['/products']);
    }
  }
}
