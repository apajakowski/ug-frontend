import { Component, OnInit } from '@angular/core';
import 
import {FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
	imie : AbstractControl;
	rokUr : AbstractControl;
	
	persons: Observable<Persom>;
	
  constructor(fb: FormBuilder, private personService: PersonService) {
	this.myForm = fb.group({
		'imie': ['podaj imie', Validators.compose([
		Validators.required, Validators.minLength(3), this.myImieValidator
		])],
		'rokUr': ['podaj rok urodzenia', Validators.compose([
		Validators.min(1970)
		])]
		
	});
	
	this.imie = this.myForm.controls['imie'];
	this.rokUr = this.myForm.controls['rokUr'];
	personService.getPersons().subscribe(person => console.log('dodano osobe ' + person.imie));
	//this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log(imie));
	
  }

  ngOnInit() {
  }
  
  mySubmit(value: any) {
  //console.log(this.personService.getPersons().pop());
  let person = new Person(this.imie.value, this.rokUr.value);
  this.personService.addPerson(person);
  this.	personService.getPersons().subscribe(person => console.log('dodano osobe' + person.imie));
  
  //typy form control
  //this.imie.status = VALID, PENDING, DISABLED
  //this.imie.pristine/dirty/untoutched
  //console.log("liczba osob: " + this.personService.getPersons().liczba);
  }

  myImieValidator(control: FormControl){
	if (control.value.match(/^Bol/i)) {
	return {
		'bolekValue': true;
		};
	} 
  }
  
}
