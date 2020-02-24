import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { SharedModule} from '../shared/shared.module'




@NgModule({
  declarations: [ProductsComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }
