import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private readonly _httpclient = inject(HttpClient);

  constructor() {

  }


  getAllProducts():Observable<any>{
    return this._httpclient.get('https://ecommerce.routemisr.com/api/v1/products');
  }

}
