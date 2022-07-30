import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  filterCountrie= '';
  countries: any;
  constructor( private countriesServ: CountriesService) {
    this.countriesServ.getAllCountries().subscribe((data)=> {
      this.countries = data
    })
   }
}
