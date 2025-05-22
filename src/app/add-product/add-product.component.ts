import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
       newProduct = { name: '', price: '', image: '' };
       datasent:boolean = false;

  constructor(private productService:ProductService) {}

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.convertImageToBase64(file);
    }
  }

  convertImageToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.newProduct.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  addNewProduct() {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.image) {
      this.productService.AddProduct({ ...this.newProduct });
      this.newProduct = { name: '', price: '', image: '' };
      this.datasent = true;
    } else {
      alert("All fields are required.");
    }
  }
}
 