import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductDetailsViewComponent } from './components/presentational/product-details-view/product-details-view.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './components/containers/product-form/product-form.component';
import { ProductFormViewComponent } from './components/presentational/product-form-view/product-form-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsListViewComponent,
    ProductDetailsComponent,
    ProductDetailsViewComponent,
    ProductFormComponent,
    ProductFormViewComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
