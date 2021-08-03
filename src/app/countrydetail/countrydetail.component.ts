import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
  name?: string;
  public borders: any;
  public country: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.name = (this.route.snapshot.paramMap.get("name"))!
    this.http.get(`https://restcountries.eu/rest/v2/name/${this.name}`).subscribe(data => {
      Object.entries(data).map((item: object) => {
        this.country = item;
      })
    })
    setTimeout(() => {
      this.country = this.country[1]
    }, 1000);

  }
  bordercountry(e: any) {
    console.log(e.target.textContent)
    this.http.get(`https://restcountries.eu/rest/v2/alpha/${e.target.textContent}`).subscribe(data => {
      this.borders = Object.values(data)[0]
      if (e.target.textContent == 'IRN')
        this.borders = 'iran'


      this.router.navigateByUrl(`detail/${this.borders}`)
    })

  }
}
