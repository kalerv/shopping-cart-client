import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/models/product.interface';
import { User } from 'app/models/user.interface';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {
  }
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService) { }

  ngOnInit () {
  }

  addToCart () {
    const user = {
      name: 'Vikas Kaler',
      id: 1
    };
    this.cartService.addProductToCart({
      user,
      product: this.product, quantity: 1
    })
  }
}
