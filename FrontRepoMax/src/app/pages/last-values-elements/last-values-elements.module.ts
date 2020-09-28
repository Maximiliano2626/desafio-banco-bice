import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastValuesElementsComponent } from './last-values-elements.component';
import { LastValuesElementsRoutingModule } from './last-values-elements-routing.module';



@NgModule({
  declarations: [LastValuesElementsComponent],
  imports: [
    CommonModule,
    LastValuesElementsRoutingModule
  ]
})
export class LastValuesElementsModule { }
