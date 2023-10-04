import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getPolos(){
    return this.http.get(`${this.url}polos`);
  }

  getPolosByCategory(category: string) {
    return this.http.get(`${this.url}polos/${category}`);
  }
}
