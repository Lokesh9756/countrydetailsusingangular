import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'countrydetail';
  public theme: any;
  constructor() {

  }
  ngOnInit(): void {
    this.theme = localStorage.getItem('theme');
    var display = document.getElementById('display')!;
    if (this.theme == 'dark') {
      display.className = this.theme;
      display.childNodes[0].childNodes[1].textContent = 'Light Mode'
    }
    else {
      display.className = this.theme;
      display.childNodes[0].childNodes[1].textContent = 'Dark Mode'
    }
  }
  changemode(e: any) {
    if (this.theme == 'dark') {
      e.target.textContent = 'Dark Mode'

      e.target.parentNode.parentNode.className = 'light';
      this.theme = 'light';
      localStorage.setItem('theme', this.theme)

    }
    else {
      e.target.textContent = 'Light Mode'
      e.target.style.backgroundColor = "yellow"
      e.target.parentNode.parentNode.className = 'dark'
      e.target.style.backgroundColor = ""
      this.theme = "dark"
      localStorage.setItem('theme', this.theme)
    }


  }
}
