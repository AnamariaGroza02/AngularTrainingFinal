import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { getProductsDetailsListMock } from 'src/app/mocks/products.mocks';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products = getProductsDetailsListMock(10);
}
