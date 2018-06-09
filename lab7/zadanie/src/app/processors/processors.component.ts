import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor';
import { PROCESSORS } from '../mock-processors';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.css']
})
export class ProcessorsComponent implements OnInit {
processors = PROCESSORS;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(processor: Processor): void {
    this.selectedProcessor = processor;
  }


}
