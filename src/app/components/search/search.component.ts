import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  countries: any;
  constructor(  private router: Router,
                private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  search(value: string){
    if(value && value.length > 3 ){
      this.router.navigate([`countrie/${value}`])
    }
  }

}
