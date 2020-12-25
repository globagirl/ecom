import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  AllcategoriesList = []; //search function
//alert
alert:boolean=false;//alert status
message: string;//alert message
  //modal
  public categoryId = Number;
  closeResult: String;
//pagination
public page = 1;
public pageSize = 5;

  constructor(private cs: CategoriesService, private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    /*
    //refrech
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

  deleteCatgeory(id): void {
      this.cs.deleteCategory(id).subscribe(
        (result) => {
          this.ngOnInit();
          this.modalService.dismissAll();//close popup

          this.message = 'Category Deleted Successfuly';
          this.alert=true
        },
        (error) => {
          console.log(error);
        }
      );
  }
// popup function
open(content, id) {
  this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  this.categoryId = id;
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
// end popup function

  //search function
  filtre(value) {
    this.categoriesList = this.AllcategoriesList.filter((c) => {
      return c.name.includes(value) || c.id == value;
    });
  }
}
