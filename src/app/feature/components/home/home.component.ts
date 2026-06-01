import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/Products/products.service';
import { IProducts } from '../../../core/interface/iproducts.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  implements OnInit {
  constructor(private _ProductsService:ProductsService) {}

  products!:IProducts[]

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
      this.products = res.data;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}
    })
  }

}
