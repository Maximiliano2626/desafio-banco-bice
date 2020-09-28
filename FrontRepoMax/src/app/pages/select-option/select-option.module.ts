import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectOptionComponent } from './select-option.component';
import { SelectOptionRoutingModule } from './select-option-routing.module';

@NgModule({
  declarations: [SelectOptionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectOptionRoutingModule,
    FormsModule,
  ]
})
export class SelectOptionModule { }
