import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports:[ MatSliderModule,MatButtonModule,MatSelectModule, MatInputModule, MatFormFieldModule],
  exports:[MatSliderModule,MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule{

}
