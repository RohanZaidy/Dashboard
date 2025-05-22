import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
      productList:any[] = []

   constructor(private productservice:ProductService){}
   
   ngOnInit()
   {
      this.productList = this.productservice.getproduct()
   }
   
trackByName(index: number, product: any) {
  return product.name;
}

 
}