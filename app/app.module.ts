import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';



import { DemoTypeaheadAsyncComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoTypeaheadAsyncComponent],
  imports: [
    TypeaheadModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoTypeaheadAsyncComponent]
})
export class AppModule {
}
