import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//obtener la lista de productos y el detalle de cada producto
export class AerolabApiService {
  private apiUrl = 'https://api.apiary.io/github/hook/belenj'; //URL real de la API

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`, {
      headers: new HttpHeaders({ 'Authorization': 'U0YBNE36PNfnAG7Zwcy/ELvX+3y0z6FASuVcNDv3rS4=' }) //token
    });
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}`, {
      headers: new HttpHeaders({ 'Authorization': 'U0YBNE36PNfnAG7Zwcy/ELvX+3y0z6FASuVcNDv3rS4=' }) //token
    });
  }
}