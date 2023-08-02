import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDetailsComponent } from './components/containers/shopping-cart-details/shopping-cart-details.component';
import { ShoppingCartDetailsViewComponent } from './components/presentational/shopping-cart-details-view/shopping-cart-details-view.component';
import { IconButtonComponent } from '../shared/types/components/presentational/icon-button/icon-button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ShoppingCartDetailsComponent,
    ShoppingCartDetailsViewComponent,
  ],
  imports: [CommonModule, IconButtonComponent, MatIconModule],
  exports: [ShoppingCartDetailsComponent],
})
export class ShoppingCartModule {}
