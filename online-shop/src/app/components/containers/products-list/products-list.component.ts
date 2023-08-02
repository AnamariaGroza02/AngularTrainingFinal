import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: Observable<IProduct[]> | undefined =
    this.productsService.getProducts();
  constructor(private productsService: ProductsService) {}
}
