import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/productList', data);
  }

  getProdutct() {
    return this.http.get<any>('http://localhost:3000/productList');
  }

  putProduct(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/productList/' + id, data);
  }

  deleteProduct(id: any) {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
