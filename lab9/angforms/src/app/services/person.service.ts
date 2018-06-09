import { Injectable } from '@angular/core';
import {Person} from './../model/person.model';
import {from} from 'rxjs/observable/from';
import {Observable} from 'rxjs/Observable';
//gdzie jest dostepny root
@Injectable(
	{
	providedIn: 'root',
	}
)
export class PersonService {

	persons: Person[];

  constructor() {
	this.persons = [ new Person ('bolek', 1987), new Person('lolek', 1234), new Person('abvs', 2341 )];
  }

  getPersons(): Observable<Person> {
  return from(persons);
  }
  
  addPerson(person: Person) {
  this.persons.push(person);
  }
  
}
