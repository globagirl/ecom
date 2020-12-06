import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css',
  './../../../assets/css/sb-admin-2.css',]
})
export class CategoriesCreateComponent implements OnInit {

  public categoryForm: FormGroup;

  constructor(fb: FormBuilder, private as: CategoriesService, 
    private router: Router) { 
    let categoryFormControls= {
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
        Validators.pattern("[A-Za-z .'-]+")
      ])
    };
    this.categoryForm= fb.group(categoryFormControls);
  }

  ngOnInit(): void {
  }

  get name() {
    return this.categoryForm.get('name');
  }

  newCategory(){
    let data = this.categoryForm.value;
    let category = new Category(null, data.name);
    
    this.as.addCategory(category).subscribe(
      (result) => {
        this.router.navigateByUrl('/categories-list');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
