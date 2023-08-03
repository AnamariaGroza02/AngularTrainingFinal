import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';
import { IProduct } from '../types/products.types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products!: IProduct[];
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getProducts(): Observable<IProduct[]> {
    if (this.products) {
      return of(this.products);
    }
    const productsUrl = `${this.apiUrl}/shop/product`;
    const productList = this.http.get<IProduct[]>(productsUrl);
    return productList.pipe(
      tap(products => {
        this.products = products;
      })
    );
  }

  deleteProduct(productId: string): Observable<void> {
    this.products.splice(
      this.products.findIndex(product => product.productId === productId)
    );
    const deleteUrl = `${this.apiUrl}/shop/product/${productId}`;
    return this.http.delete<void>(deleteUrl);
  }

  getProductDetails(productId: string | null): Observable<IProduct> {
    const productUrl = `${this.apiUrl}/shop/product/${productId}`;
    const productDetails = this.http.get<IProduct>(productUrl);
    return productDetails;
  }

  updateProduct(productId: string): void {
    const currentProduct: IProduct | undefined = this.products.find(
      product => product.productId === productId
    );
    console.log(currentProduct);
    // const updateUrl = `${this.apiUrl}/shop/product/${productId}`;
    // return this.http.put<IProduct>(updateUrl);
  }
}
