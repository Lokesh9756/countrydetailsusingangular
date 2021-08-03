import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'countrydetail';
  constructor() {

  }
  ngOnInit(): void {

  }
  changemode(e: any) {
    if (e.target.className == 'fa fa-moon-o') {
      e.target.className = 'fa fa-sun-o';
      e.target.textContent = '..Light Mode'
      e.target.style.backgroundColor = "yellow"
      e.target.parentNode.parentNode.className = 'dark';

    }
    else {
      e.target.className = 'fa fa-moon-o';
      e.target.textContent = '..Dark Mode'
      e.target.parentNode.parentNode.className = 'light'
      e.target.style.backgroundColor = ""
    }


  }
}
