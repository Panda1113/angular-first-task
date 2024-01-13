import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

interface Problem {
  answer: any[];
  id: string;
  question: string;
  type: string;
}

@Component({
  selector: 'app-problem-render',
  templateUrl: './problem-render.component.html',
  styleUrl: './problem-render.component.scss',
})

export class ProblemRenderComponent implements OnInit {
  problem_type: string = "";
  problemData: Problem[] = [];
  currentNo: number = 0;
  answers : any = [];
  tempArray:any = {};

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getProblemData();
  }

  getProblemData() {
    const data: any = this.appService.getProblemData(this.currentNo);
    this.problemData = data;
    this.problem_type = data.type;
  }

  async currentNoChange() {
    await this.answers.push(this.tempArray);
    this.currentNo += 1;
    if (this.currentNo === 5) {
      console.log(this.answers)
      await alert(await JSON.stringify(this.answers))
      return
    }
    await this.getProblemData();
  }

  receiveMessage($data: any) {
    const values = $data;
    console.log("dddrrrrrrd", values);
  }

  responseData($data: any[]) {
    this.tempArray = [];
    this.tempArray = $data
  }
}
