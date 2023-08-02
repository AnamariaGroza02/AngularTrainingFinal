import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getProductDetailsMock } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent {
  productDetails: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  nullToUndefined(text: string | null) {
    if (text == null) return undefined;
    return text;
  }
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productDetails = getProductDetailsMock(
      this.nullToUndefined(productId)
    );
  }
}
