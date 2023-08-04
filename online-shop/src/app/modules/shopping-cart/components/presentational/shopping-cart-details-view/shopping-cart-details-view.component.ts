import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/types/products.types';
import { ShoppingCartDetail } from 'src/app/types/shoppingCart';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  @Input() products?: ShoppingCartDetail[];
}
