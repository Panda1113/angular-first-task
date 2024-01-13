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
  response:any = {};
  tempArray:any = [];
  
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
    this.response.question = this.question;
    const index = this.tempArray.indexOf(target.value);

    if (index !== -1) {
      this.tempArray.splice(index, 1);
    }else{
      this.tempArray.push(target.value);
    }
    this.response.answer = this.tempArray;
    this.submitFuc.emit(this.response);
  }
}
