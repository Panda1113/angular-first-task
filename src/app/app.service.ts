import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  problemData:any[] = [
    {
      id: 1,
      question: "WHAT'S YOUR NAME?",
      type: "textarea",
      answer: [],
    },
    {
      id: 2,
      question: "WHAT KIND OF MUSIC DO YOU LIKE?",
      type: "radio",
      answer: [
        { id: 0, items: "CARTOON" },
        { id: 1, items: "FILM" },
        { id: 2, items: "BOTH" },
        { id: 3, items: "BOTH NOT" },
      ]
    },
    {
      id: 3,
      question: "HOW MANY ANIAMALS DO YOU HAVE?",
      type: "checkbox",
      answer: [
        { id: 0, items: "ONE" },
        { id: 1, items: "TWO" },
        { id: 2, items: "THREE" },
        { id: 3, items: "FOUR" },
        { id: 4, items: "NEVER" },
      ]
    },
    {
      id: 4,
      question: "WHAT'S YOUR BROTHER NAME?",
      type: "textarea",
      answer: [],
    },
    {
      id: 5,
      question: "ARE YOU MARRIED?",
      type: "radio",
      answer: [
        { id: 0, items: "YES" },
        { id: 1, items: "NO" },
      ]
    },
  ];
  constructor() { }

  getProblemData(currentNo:number): any[] {
    return this.problemData[currentNo];
  }

  getAllProblemData(){
    return this.problemData;
  }
}
