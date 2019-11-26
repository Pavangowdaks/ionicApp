import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class BankService {
  url = 'https://vast-shore-74260.herokuapp.com/banks';
  apiKey = '2be398c0';
  public items: any = [];

  constructor(private http: HttpClient) { }

  public searchData(title) {
    return this.http.get(`${this.url}?city=${encodeURI(title)}&apiKey=${this.apiKey}`);
  }

}
