import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: [
    './categories-list.component.css',
    './../../../assets/css/sb-admin-2.css',
  ],
})
export class CategoriesListComponent implements OnInit {
  categoriesList = [];
  AllcategoriesList = []; //search

  constructor(private cs: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 1000 * 10); //10 is the number of seconds to refresh 

    this.cs.getAllCategories().subscribe(
      (result) => {
        this.categoriesList = result;
        this.AllcategoriesList = result; //search
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCategory(id): void {
   // console.log(id);
    this.cs.deleteCategory(id).subscribe(
      (result) => {
        this.router.navigateByUrl('/categories-list');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //search function
  filtre(value) {
    this.categoriesList = this.AllcategoriesList.filter((c) => {
      return c.name.includes(value) || c.id == value;
    });
  }
}
