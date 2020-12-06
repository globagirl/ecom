import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    /*
    setTimeout(() => {
      this.ngOnInit();
    }, 1000 * 10); //10 is the number of seconds to refresh
    */
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
    let conf = confirm(
      'Are you sure you want to delete this category ' + id + ' ?'
    );
    if (conf) {
      this.cs.deleteCategory(id).subscribe(
        (result) => {
          alert('Category Deleted');
          this.ngOnInit();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  //search function
  filtre(value) {
    this.categoriesList = this.AllcategoriesList.filter((c) => {
      return c.name.includes(value) || c.id == value;
    });
  }
}
