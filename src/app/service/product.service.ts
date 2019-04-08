import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[] = [
        new Product(1, 'Oppo', 12000000, true),
        new Product(2, 'SamSung', 10000000, false),
        new Product(3, 'Sony', 9000000, true)
    ];
    result: Product[] = [];

    constructor() { }
    getAllProduct(name?, price?) {
        if (name) {
            this.result = this.products.filter( x => {
                return x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
            });
        } else if (price) {
            this.result = this.products.filter( x => {
                return x.price === price;
            });
        } else {
            this.result = this.products;
        }
        return this.result;
    }
    getProductById(id) {
        let result = null;
        for (const item of this.products) {
            if (item.id === id) {
                result = item;
                break;
            }
        }
        return result;
    }
}
