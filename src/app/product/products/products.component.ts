import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products=[];
  constructor(private route:Router) { }

  ngOnInit() {
    this.products=[{name:"REDMi 5",price:1000},{name:"REDMi 6",price:1500}]
  }

  gotoProductDetails(){
    this.route.navigate(['/products-detail'])
  }

}
