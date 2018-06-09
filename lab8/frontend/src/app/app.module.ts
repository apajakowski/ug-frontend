import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonSearchComponent } from './person-search/person-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PersonsComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
