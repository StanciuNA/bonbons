import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

  current_page = 1

  products_per_page = 10

  list_of_products = [];


  constructor(public productsService : ProductsService){
    this.getProducts().subscribe((data: any) => {
      this.list_of_products = data.map((product: any) => {
        return { ...product, quantity: 1 };
      });
    });
  }

  getProducts(){
    return this.productsService.getProducts();
  }

  increment(product : any){
    if (product['quantity'] < 99){
      product.quantity++;
    }
  }

  decrement(product : any){
    if (product['quantity'] > 1){
      product.quantity--;
    }
  }
}
