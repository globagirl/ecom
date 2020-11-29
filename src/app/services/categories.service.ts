import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public CategoriesAPI = 'http://127.0.0.1:8088/api/v1/categories/';

  constructor(private http: HttpClient) { }

  getAllCategories(){
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    return this.http.get<any>(this.CategoriesAPI, {headers: options});
  }

  getCategoryById(id){
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    
    return this.http.get<any>(this.CategoriesAPI+id, {headers: options});
  }

  addCategory(category : Category) {
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    return this.http.post<any>(this.CategoriesAPI,category, {headers: options});
  }

  updateCategory(category : Category, id : Number){
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    return this.http.put<any>(this.CategoriesAPI+id, category, {headers: options});
  
  }

  deleteCategory(id : Number){
    let token= localStorage.getItem('mytoken')
    let options= new HttpHeaders().set('Authorization', "Bearer "+token)
    
    return this.http.delete<any>(this.CategoriesAPI+id , {headers: options});
  }

}
