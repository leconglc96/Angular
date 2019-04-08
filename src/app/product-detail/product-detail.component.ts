import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.class';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  products: Product = null;
  subscription: Subscription;
  constructor(
      public activatedRoute: ActivatedRoute,
      public productService: ProductService
  ) { }

  ngOnInit() {
    // this.handleParamsRoute();
    this.handleParams();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  handleParamsRoute() {
    const id = (+this.activatedRoute.snapshot.params.id);
    this.products = this.productService.getProductById(id);
  }
  handleParams() {
    this.subscription = this.activatedRoute.params.subscribe(data => {
      const id = (+data.id);
      this.products = this.productService.getProductById(id);
    });
  }

}
