import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products =  [
  { name: 'Backpack', price: '800', image: '/thj(1) - Copy.jpeg' },
  { name: 'Watch', price: '1500', image: '/th(1).jpeg' },
  { name: 'Shoes', price: '2000', image: '/th(2).jpeg' },
  { name: 'Smartphone', price: '30000', image: '/thre(1) - Copy.jpeg' },
  { name: 'Headphones', price: '1200', image: '/thh(1).jpeg' },
  { name: 'T-shirt', price: '400', image: '/thr(1).jpeg' },
  { name: 'Laptop', price: '45000', image: '/thf(1).jpeg' },
  { name: 'Glasses', price: '500', image: '/th.jpeg' },
  { name: 'Keyboard', price: '700', image: '/ths(1) - Copy.jpeg' },
  { name: 'Mouse', price: '500', image: '/mouse.jpeg' },
  { name: 'Sunglasses', price: '600', image: '/sunglasses.jpeg' },
  { name: 'Cap', price: '200', image: '/cap.jpeg' },
];

   getproduct()
   {
    return this.products;
   }

   AddProduct(product: { name: string, price: string, image: string }) {
    this.products.push(product);
  }
}
