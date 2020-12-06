import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-products',
  templateUrl: './categories-products.component.html',
  styleUrls: ['./categories-products.component.css',
  './../../../assets/css/sb-admin-2.css',]
})
export class CategoriesProductsComponent implements OnInit {
  category = [];
  constructor(private cs: CategoriesService, 
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    let idCategory = this.route.snapshot.params.id;

    this.cs.getCategoryById(idCategory).subscribe(
     (result) => {
      //this.category =  JSON.parse(result);
      this.category =  result;
       console.log(result);
     },
    (error) => {
       console.log(error);
     }
   );
  }
}
