import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductActions } from '@shared/product-list/actions/products-actions-types';
import { getExclusiveProducts } from '@shared/product-list/selectors/products.selector';
import { Product } from 'app/models/product.interface';
import { AppState } from 'app/reducers';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unSubscribe$ = new Subject<void>();
  products$: Observable<Product[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit () {
    this.store.dispatch(ProductActions.loadProducts())
    this.products$ = this.store.select(getExclusiveProducts);
  }
  ngOnDestroy () {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
