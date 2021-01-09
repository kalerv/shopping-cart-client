import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.interface';
import { ProductService } from 'app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private productsService: ProductService) { }

  ngOnInit () {
    this.products$ = this.productsService.getAllExclusiveProducts();
  }

}
