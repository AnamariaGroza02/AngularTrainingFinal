import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.scss'],
})
export class ProductFormViewComponent implements OnInit {
  @Input() productDetails!: IProduct;
  productForm: FormGroup;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      productName: [''],
      productDescription: [''],
      categoryName: [''],
      price: [0],
      weight: [0],
      imageUrl: [''],
    });
  }

  onSubmit(): void {
    if (this.productDetails) {
      const updatedProduct: IProduct = {
        ...this.productDetails,
        ...this.productForm.value,
      };

      this.productService.updateProduct(updatedProduct).subscribe(() => {
        this.router.navigate([
          '/product-details',
          this.productDetails.productId,
        ]);
      });
    }
  }
  onCancel(): void {
    if (this.productDetails) {
      this.productForm.patchValue(this.productDetails);
    }
  }
  onAdd(): void {
    const newProduct: IProduct = {
      ...this.productForm.value,
    };

    this.productService.createProduct(newProduct).subscribe(createdProduct => {
      this.router.navigate(['/products']);
    });
  }

  isAddRoute(): boolean {
    return this.router.url === '/add-form';
  }

  ngOnInit(): void {
    if (this.productDetails) {
      this.productForm.patchValue(this.productDetails);
    }
  }
}
