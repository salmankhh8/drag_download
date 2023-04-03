import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { FirstComponent } from './first/first/first.component';
import { SecondComponent } from './second/second.component';
import { Canvas1Component } from './canvas1/canvas1.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ClipboardPasteComponent } from './clipboard-paste/clipboard-paste.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    Canvas1Component,
    DragDropComponent,
    ClipboardPasteComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // FirstModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
