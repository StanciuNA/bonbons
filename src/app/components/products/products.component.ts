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

  @Input()
  title = ""
  @Input()
  description = "";
  @Input()
  price = "";
  @Input()
  image = "";

  list_of_products = null

  constructor(public productsService : ProductsService){
    this.getProducts()
  }

  getProducts(){

    return this.productsService.getProducts();
  }
}
