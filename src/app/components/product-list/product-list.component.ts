import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'app/models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[];
  @Output() buyNowClicked = new EventEmitter<Product>();
  @Output() addToCartClicked = new EventEmitter<Product>();
  constructor() { }

}
