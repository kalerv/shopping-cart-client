import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product.interface';
import { ProductService } from 'app/services/product.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unSubscribe$ = new Subject<void>();
  products: Product[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.data.pipe(takeUntil(this.unSubscribe$)).subscribe((data: { exclusiveProducts: Product[] }) => {
      this.products = data.exclusiveProducts.filter(p => p.exclusive);
    })
  }
  ngOnDestroy () {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
