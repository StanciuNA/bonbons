import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private products : ProductsService){

    this.products.getProducts();

  }

}
