import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FirtTestComponent } from './firt-test/firt-test.component';
import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    // FirtTestComponent,
    FirstComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[FirstComponent]
})
export class FirstModule { }
