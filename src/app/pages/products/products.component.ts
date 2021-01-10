import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllProducts } from '@shared/product-list/selectors/products.selector';
import { Product } from 'app/models/product.interface';
import { AppState } from 'app/reducers';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  unSubscribe$ = new Subject<void>();
  products$: Observable<Product[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit () {
    this.products$ = this.store.select(getAllProducts);
  }
}
