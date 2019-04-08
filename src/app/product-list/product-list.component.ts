import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  name: string;
  price: number;
  nameSearch: string;
  priceSearch: number;
  constructor(
      private productService: ProductService,
      private routerService: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.nameSearch = data.name;
      this.priceSearch = (+data.price);
      this.products = this.productService.getAllProduct(this.nameSearch, this.priceSearch);
    });
  }
  onSearch() {
    this.routerService.navigate(['/product/list'], { queryParams: { name: this.name, price: this.price }});
    // this.name = '';
    // this.price = null;
  }

}
