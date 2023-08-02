import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-products-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails?: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProductDetails(productId);
    }
  }

  getProductDetails(productId: string): void {
    this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.productDetails = products.find(
          product => product.productId === productId
        );
      },
      error: error => {
        console.error('Error fetching product details:', error);
      },
    });
  }
}
