import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsListViewComponent,
    ProductsDetailsComponent,
    ProductsDetailsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ShoppingCartModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
