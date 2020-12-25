import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: [
    './products-store.component.css',
    './../../../assets/css/sb-admin-2.css',
  ],
})
export class ProductsStoreComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private ps: ProductsService) {}

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      (result) => {
        console.log(result);
        this.products = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
