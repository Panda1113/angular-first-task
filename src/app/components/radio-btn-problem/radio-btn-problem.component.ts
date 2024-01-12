import { Component, OnInit, Input,  OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

interface Problem {
  answer: any[];
  id: string;
  question: string;
  type: string;
}

@Component({
  selector: 'app-radio-btn-problem',
  templateUrl: './radio-btn-problem.component.html',
  styleUrl: './radio-btn-problem.component.scss'
})
export class RadioBtnProblemComponent implements OnInit, OnChanges {
  @Input() data: Problem[] = [];
  @Output() messageEmitter:EventEmitter<any> = new EventEmitter();
  constructor() {

  }
  ngOnInit(): void {

  }

  question: string = '';
  answers: any = [];
  response:any = [];

  ngOnChanges(changes: SimpleChanges): void {
    const _data: any = this.data;
    this.question = _data.question
    this.answers = _data.answer;
  }

  onRadioBtnChange($event:Event){
    const target = $event.target as HTMLInputElement;
    if (target.checked) {
      const selected = target.value;
      this.response.question = this.question;
      this.response.answer = selected;
    }
    this.messageEmitter.emit(this.response);
  }
}
