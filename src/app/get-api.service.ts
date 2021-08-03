import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  public countries: any[] = [];
  public country: any;
  public temp: any;
  public namesearch: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      Object.entries(data).map((item: object) => {
        this.countries.push(item)
      })
      //this.rawdata = this.countries;
      //this.countris = data;
      //  console.log(this.countries)
    })

  }
  apicall() {
    return this.countries
  }

}
