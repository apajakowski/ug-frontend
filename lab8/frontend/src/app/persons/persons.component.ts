import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
	persons: Persons[];
	selectedPerson: Person;

  constructor() {
	this.persons = [ new Person('bolek', 1978), new Person ('lolek', 1876)];
	
  }

  selectPerson(person: Person) {
  this.selectedPerson = person;
  }
  
  detailsChanged() {
  console.log("children changed: ");
  }
  ngOnInit() {
  }

}
