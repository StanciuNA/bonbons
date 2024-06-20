import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [];

  constructor(private http: HttpClient) {

  }

  url = "http://localhost:3000/products";

  getProducts(){
    this.http.get(this.url).subscribe((data : any) =>{
      console.log(data);
    })
  }
}
