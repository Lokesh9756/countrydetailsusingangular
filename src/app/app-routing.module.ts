import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { config } from 'rxjs';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "detail/:name",
    component: CountrydetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
