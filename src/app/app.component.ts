import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import sampleServerResponse from '../assets/sampleServerResponse.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient){}
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[]=[]

  serverData = sampleServerResponse;

ngOnInit(){
var tempFeilds: any=[]
let field

this.serverData.surveyDTO[0].QuestionerDefinition.forEach(element => {
switch (element.DataType) {
  case "radio":
    field={
      key: element.Data,
      type: element.DataType,
      className: 'd-inline-flex flex-column',
      defaultValue: 1,
      templateOptions: {
      label:element.SurveyQuestion,
      //    options:(): Observable<any[]>=> {
      //     return of(element.QuestionerValueType);
      // },
      options:element.QuestionerValueType,
      labelProp: 'Description',
      valueProp:'WeightValue',
      required: true
      }
    }

    tempFeilds.push(field)

    break;

    case "number":
    field= {
      key: element.Data,
      type: 'input',
      templateOptions: {
        type:element.DataType,
        label: element.SurveyQuestion,
        placeholder: element.SurveyQuestion,
        required: true,
      },
    },

    tempFeilds.push(field)

    break;

    case "Scale Of 1-5":
   field=  {
        key: element.Data,
        type: 'slider',
        templateOptions: {
          label: element.SurveyQuestion + "  In " + element.DataType,
          thumbLabel: true,
          required: true,
          max:5,
          min:0,
        },
      }
      tempFeilds.push(field)
      console.log(field)
    break;





    default:
    break;
}

});
this.fields=tempFeilds
}


submit(model: any) {
  console.log(model)
 }

}
