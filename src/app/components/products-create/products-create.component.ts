import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: [
    './products-create.component.css',
    './../../../assets/css/sb-admin-2.css',
  ],
})
export class ProductsCreateComponent implements OnInit {
  public productForm: FormGroup;
  categoriesList = [];

  constructor(
    fb: FormBuilder,
    private ps: ProductsService,
    private cs: CategoriesService,
    private router: Router
  ) {
    let productFormControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("[A-za-z .'-]+"),//only chars
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("^\\d+\\.\\d{0,2}$")
      ]),
      currency: new FormControl(''),
      category_id: new FormControl(''),
    };
    this.productForm = fb.group(productFormControls);
  }

  ngOnInit(): void {
    this.cs.getAllCategories().subscribe(
      (result) => {
        this.categoriesList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get productname() {
    return this.productForm.get('name');
  }
  get productdecription() {
    return this.productForm.get('description');
  }
  get productprice() {
    return this.productForm.get('price');
  }
  get productcurrency() {
    return this.productForm.get('currency');
  }
  get productcategory() {
    return this.productForm.get('category');
  }

  newProduct() {
    let data= this.productForm.value;
    let product= new Product(null, data.name, data.description, data.price, data.currency, data.category_id)
 
    console.log(product);

    this.ps.addProduct(product).subscribe(
      (result) => {
        this.router.navigateByUrl('/products-list');
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
