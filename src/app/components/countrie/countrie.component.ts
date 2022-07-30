import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.scss']
})
export class CountrieComponent implements OnInit {
  countrie:any;
  error:any
  constructor(  private countriesServ:CountriesService,  
                private router: Router,
                private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.countriesServ.getCountrie(this.route.snapshot.params['name']).subscribe((data)=> {
      this.countrie = data
    }, response =>{
      this.error = response
    }
    )
  }

  inicio():void{
    this.router.navigate([`countries`])
  }
}
