import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
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
  //pagination
  public page = 1;
  public pageSize = 5;
//alert
  alert:boolean=false;//alert status
  message: string;//alert message
  //modal
  public productId = Number;
  closeResult: String;
  //
  public productsList: Array<Product> = [];

  constructor(private ps: ProductsService, private modalService: NgbModal) {}

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

  //delete function
  public deleteProduct(id): void {
    this.ps.deleteProduct(id).subscribe(
      (result) => {
          this.ngOnInit();
          this.modalService.dismissAll();//close popup
        this.message = 'Product Deleted Successfuly';
        this.alert=true
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  closeAlert(){
    this.alert=false
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
    this.productId = id;
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
}
