import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Appmodule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(Appmodule).catch(err => console.log(err));
