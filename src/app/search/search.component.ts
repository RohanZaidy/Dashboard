import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormControl, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule,NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
   productlist:any;
   productname:string = "";
   searchedProduct:any = null;
   notfound:boolean = false;
   searched:boolean = false;

  constructor(private productservice:ProductService){}

  ngOnInit()
  {
     this.productlist = this.productservice.getproduct();
  }

  SearchP()
  {
    this.searchedProduct = null;
    this.searched = false;

    for (let i = 0; i < this.productlist.length; i++) {
      if (this.productlist[i].name.toLowerCase() === this.productname.toLowerCase()) {
        this.searchedProduct = this.productlist[i];
        this.searched = true;
        break;
      }else{
        this.notfound = true;
      } }
    
    }

      ClearP()
      {
        this.productname = "";
        this.searched = false;
        this.notfound = false;
      }
}