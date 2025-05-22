import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'products', component:ProductComponent},
    {path:'search', component:SearchComponent},
    {path:'addproducts', component:AddProductComponent}
];
