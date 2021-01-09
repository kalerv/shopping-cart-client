import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.interface';
import { ProductService } from 'app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit () {
    this.products$ = this.productService.getAllProducts();
  }

}
