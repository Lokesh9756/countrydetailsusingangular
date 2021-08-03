import { Component, Input, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public search: any;
  public countries: any[] = []
  public alldata: any[] = [];
  constructor(private getapi: GetApiService, private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      Object.entries(data).map((item: object) => {
        this.alldata.push(item)
      })

    })
    this.countries = this.alldata;
  }
  public country: any;
  ngOnInit(): void {

  }
  handle() {
    if (this.search == '') {
      this.countries = this.alldata;
    }
    else {
      this.countries = []
      this.http.get(`https://restcountries.eu/rest/v2/name/${this.search}?fullText=true`).subscribe(data => {
        Object.entries(data).map((item: object) => {
          this.countries.push(item);
        })
      })
    }
  }
  region(e: any) {
    if (e.target.value == "Filter by region") {
      this.countries = this.alldata;
    }
    else {
      this.countries = [];
      this.http.get(`https://restcountries.eu/rest/v2/region/${e.target.value}`).subscribe(data => {
        Object.entries(data).map((item: object) => {
          this.countries.push(item);
        })
      })
    }
  }
}
