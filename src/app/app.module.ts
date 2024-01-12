import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CheckBoxProblemComponent } from "./components/check-box-problem/check-box-problem.component";
import { ProblemRenderComponent } from "./components/problem-render/problem-render.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioBtnProblemComponent } from "./components/radio-btn-problem/radio-btn-problem.component";
import { TextAreaProblemComponent } from "./components/text-area-problem/text-area-problem.component";

@NgModule({
    declarations: [
        AppComponent, 
        CheckBoxProblemComponent, 
        ProblemRenderComponent,
        RadioBtnProblemComponent,
        TextAreaProblemComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class Appmodule { }