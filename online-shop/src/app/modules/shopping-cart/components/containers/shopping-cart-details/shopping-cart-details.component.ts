import { Component } from '@angular/core';
import { getProductDetailsList } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  products = getProductDetailsList(10);

}
