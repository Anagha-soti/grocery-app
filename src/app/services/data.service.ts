import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/category`)
  }
  getProduct(id:any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/products/cat/${id}`)
  }
  getSubcat(id:any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/subcategory/${id}`)
  }
  getProductById(id:any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/products/${id}`)
  }
}
