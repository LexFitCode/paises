import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './pages/main-app/main-app.component';

import { HttpClientModule } from'@angular/common/http';
import { CountriesComponent } from './components/countries/countries.component';
import { SearchComponent } from './components/search/search.component';
import { CountrieComponent } from './components/countrie/countrie.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    CountriesComponent,
    SearchComponent,
    CountrieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
