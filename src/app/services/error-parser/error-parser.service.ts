import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorParserService {

  constructor() { }

  public getMessage(data) {
    let message;

    if (data && data.data && data.data.message) {
      message = data.data.message;
    } else {
      message = 'An error occured.';
    }

    return message;
  }
}
