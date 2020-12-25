import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-img-add',
  templateUrl: './product-img-add.component.html',
  styleUrls: ['./product-img-add.component.css',
  './../../../assets/css/sb-admin-2.css'],
})
export class ProductImgAddComponent implements OnInit {
  public productFileForm: FormGroup;
  productsList = [];
  constructor(
    fb: FormBuilder,
    private pis: ProductImageService,
    private ps: ProductsService,
  ) {
    let productFileFormControls = {
      product_id: new FormControl(''),
    };
    this.productFileForm = fb.group(productFileFormControls);
  }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      (result) => {
        this.productsList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get productId() {
    return this.productFileForm.get('product');
  }

  selectedFile: File;
    message: string;
    //retrievedImage: any;
 // base64Data: any;
  //retrieveResonse: any;
 // imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0]; //Select File
    console.log(this.selectedFile);
  }

  //Gets called when the user clicks on submit to upload the image
  UploadFile() {
    let data= this.productFileForm.value;
    console.log(data.product_id);

    this.pis.uploadImage(this.selectedFile,data.product_id).subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    });
  }
  /*
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.pis.uploadImage(this.imageName).subscribe(
      (res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      },
      (error) => {
        console.log(error);
        console.log('ERROR retreiving image');
      }
    );
  }
  */
}
