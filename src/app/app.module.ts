import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormlyModule, FormlyFieldConfig} from '@ngx-formly/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyMatSliderModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required',message: 'This field is required'}
      ],
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,

  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
