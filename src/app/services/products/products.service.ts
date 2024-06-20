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

  getProducts(): any {
    return this.http.get(this.url)
  }
}
