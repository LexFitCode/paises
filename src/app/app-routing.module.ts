import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrieComponent } from './components/countrie/countrie.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent},
  { path: 'countrie/:name', component: CountrieComponent},
  { path: '**', redirectTo: 'countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
