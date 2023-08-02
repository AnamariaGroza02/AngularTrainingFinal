import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types/products.types';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() products: IProduct[] | undefined;
  displayedColumns: string[] = ['name', 'category', 'price', 'description'];
}
