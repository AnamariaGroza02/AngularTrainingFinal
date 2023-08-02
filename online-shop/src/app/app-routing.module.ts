import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';

const routes: Routes = [
  {
  path: '',
    component: ProductsListComponent,
  },
  {
    path:'products/:name',
    component: ProductsDetailsComponent
  },
  {
    path:'products',
    component: ProductsListComponent
  },
  {
    path:'shopping-cart',
    component: ShoppingCartDetailsComponent
  },
  {
    path:'**',
    component: ProductsListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
