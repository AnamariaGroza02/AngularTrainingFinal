import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { MyRoutes } from './util/MyRoutes';
import { ProductFormViewComponent } from './components/presentational/product-form-view/product-form-view.component';
const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: MyRoutes.PRODUCT_DETAILS,
    component: ProductDetailsComponent,
  },
  {
    path: MyRoutes.PRODUCTS,
    component: ProductsListComponent,
  },
  {
    path: MyRoutes.SHOPPING_CART,
    component: ShoppingCartDetailsComponent,
  },
  {
    path: MyRoutes.EDIT_FORM,
    component: ProductFormViewComponent,
  },
  {
    path: '**',
    component: ProductsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
