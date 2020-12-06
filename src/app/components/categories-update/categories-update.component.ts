import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: [
    './categories-update.component.css',
    './../../../assets/css/sb-admin-2.css',
  ],
})
export class CategoriesUpdateComponent implements OnInit {
  public updateCategoryForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private as: CategoriesService,
    private router: Router, private route:ActivatedRoute
  ) {
    let categoryFormControls = {
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[A-Za-z .'-]+")
      ]),
    };
    this.updateCategoryForm = fb.group(categoryFormControls);
  }

  get id() {
    return this.updateCategoryForm.get('id');
  }
  get name() {
    return this.updateCategoryForm.get('name');
  }

  ngOnInit(): void {
    let idCategory= this.route.snapshot.params.id;
    this.as.getCategoryById(idCategory).subscribe(
      (result) => {
        let category = result;
        this.updateCategoryForm.patchValue({
          id: category.id,
          name: category.name,
        })
       },
      (error) => {
         console.log(error);
       }
    );
  }



  updateCategory() {
    let data = this.updateCategoryForm.value;
    let id=  data.id;
    let category = new Category(data.id, data.name);
   this.as.updateCategory(category,id).subscribe(
    (result) => {
     this.router.navigate(['/categories-list']);
     },
    (error) => {
       console.log(error);
     }
   );
  }
}
