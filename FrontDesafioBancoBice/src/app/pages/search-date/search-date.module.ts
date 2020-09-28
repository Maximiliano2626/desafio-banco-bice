import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDateComponent } from './search-date.component';
import { SearchDateRoutingModule } from '../search-date/search-date-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchDateComponent],
  imports: [
    CommonModule,
    SearchDateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SearchDateModule { }
