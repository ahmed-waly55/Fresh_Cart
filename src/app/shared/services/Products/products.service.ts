import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private readonly _httpclient = inject(HttpClient);

  constructor() {

  }


  getAllProducts():Observable<any>{
    return this._httpclient.get(`${environment.baseURL}/api/v1/products`);
  }

}
