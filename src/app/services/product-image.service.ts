import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductImage } from '../models/product-image';

@Injectable({
  providedIn: 'root',
})

export class ProductImageService {
  public ImageAPI = 'http://127.0.0.1:8088/api/v1/uploads/';
  constructor(private http: HttpClient) {}

  public uploadImage(image: File, id: any) {
    let token = localStorage.getItem('mytoken');
    let options = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const formData = new FormData();
    formData.append('file', image);
    formData.append('productId', id);

    return this.http.post(this.ImageAPI, formData, {
      observe: 'response',
      headers: options,
    });
  }

  getImageByProductId(id){
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    
    return this.http.get<any>(this.ImageAPI+id, {headers: options});
  }

}
