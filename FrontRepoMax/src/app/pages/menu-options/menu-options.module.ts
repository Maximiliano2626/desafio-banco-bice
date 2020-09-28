import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionsComponent } from './menu-options.component';
import { MenuOptionsRoutingModule } from './menu-options-routing.module';



@NgModule({
  declarations: [MenuOptionsComponent],
  imports: [
    CommonModule,
    MenuOptionsRoutingModule
  ]
})
export class MenuOptionsModule { }
