import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

interface Problem {
  answer: any[];
  id: string;
  question: string;
  type: string;
}

@Component({
  selector: 'app-check-box-problem',
  templateUrl: './check-box-problem.component.html',
  styleUrl: './check-box-problem.component.scss',
})
export class CheckBoxProblemComponent implements OnInit, OnChanges {
  @Input() data: Problem[] = [];
  @Output() submitFuc = new EventEmitter()

  question: string = '';
  answers: any = [];
  response:any = [];
  
  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const _data: any = this.data;
    this.question = _data.question
    this.answers = _data.answer;
  }

  handleChange(event:Event){
    const target = event.target as HTMLInputElement;
    console.log(event);
    this.response.question = this.question;
    this.response.answer = [...this.response.answer ? this.response.answer : [], target.value];
    const test = this.response.answers?.filter((item:any)=>console.log(item))
    console.log(test);

  }
}
