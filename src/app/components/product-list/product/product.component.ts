import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'app/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {
  }
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onBuyNow = new EventEmitter<Product>();
  @Output() onAddCart = new EventEmitter<Product>();
}
