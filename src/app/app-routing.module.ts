import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { ProductsDetailsComponent } from './product/products-details/products-details.component';


const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'products-detail',component:ProductsDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
