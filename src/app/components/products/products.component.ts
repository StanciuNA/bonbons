import { Component,Input } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  list_of_products = [];

  constructor(public productsService : ProductsService){
    this.getProducts().subscribe((data: any) => {
      this.list_of_products = data;
      console.log(this.list_of_products);
    });
  }

  getProducts(){
    return this.productsService.getProducts();
  }
}
