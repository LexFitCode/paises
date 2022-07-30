import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries: any;

  constructor( private http: HttpClient) { }

  getAllCountries(){
    return this.http.get(`https://restcountries.com/v3.1/all`);
  }
  getCountrie(name: string){
    return this.http.get<any>( `https://restcountries.com/v3.1/name/${name}`)
    .pipe(
      catchError( (error: HttpErrorResponse) => {
        if( error.status === 404 ) {
            return throwError('El pais no existe')
        }
        return throwError('Algo salio mal')
      })
    )
  }
}
