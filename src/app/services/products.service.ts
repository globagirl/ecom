import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public ProductsAPI = 'http://127.0.0.1:8088/api/v1/products/';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    let token = localStorage.getItem('mytoken')
    let options = new HttpHeaders().set('Authorization', 'Bearer ' + token)
    return this.http.get<any>(this.ProductsAPI, { headers: options });
  }

  addProduct(product : Product) {
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    return this.http.post<any>(this.ProductsAPI,product, {headers: options});
  }
}
