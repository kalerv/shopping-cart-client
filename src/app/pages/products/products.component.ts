import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/models/product.interface';
import { ProductService } from 'app/services/product.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  unSubscribe$ = new Subject<void>();
  products: Product[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.data.pipe(takeUntil(this.unSubscribe$)).subscribe(data => this.products = data.products)
  }
  ngOnDestroy () {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
