import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: [
    './products-list.component.css',
    './../../../assets/css/sb-admin-2.css',
  ],
})


export class ProductsListComponent implements OnInit {
  productsList = [];

  page = 1;
pageSize = 4;

  constructor(private ps: ProductsService) {}

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      (result) => {
        console.log(result);
        this.productsList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
