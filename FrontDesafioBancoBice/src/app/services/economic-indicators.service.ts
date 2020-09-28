import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EconomicIndicatorsService {

  protected serverNode = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }

  getLastDataEconomicIndicators() {
    return this.http.get(`${this.serverNode}/last`);
  }

  getValueForElement(element) {
    return this.http.get(`${this.serverNode}/values/${element}`);
  }

  getValueForDate(element, date) {
    return this.http.get(`${this.serverNode}/date/${element}/${date}`);
  }
}
