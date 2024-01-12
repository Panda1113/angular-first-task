import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

interface Problem {
  answer: any[];
  id: string;
  question: string;
  type: string;
}

@Component({
  selector: 'app-text-area-problem',
  templateUrl: './text-area-problem.component.html',
  styleUrl: './text-area-problem.component.scss'
})
export class TextAreaProblemComponent implements OnInit, OnChanges {
  @Input() data: Problem[] = [];
  @Output() messageEvent: EventEmitter<any[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {

  }

  question: string = '';
  answers: any = [];
  response: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    const _data: any = this.data;
    this.question = _data.question
    this.answers = _data.answer;
  }

  // sendMessage(){

  // }

  textareaValue: string = '';
  onTextareaInput() {
    const realTimeValue = this.textareaValue;
    if (realTimeValue) {
      this.response.question = this.question;
      this.response.answer = realTimeValue
    }
    this.messageEvent.emit(this.response)
  }
}
