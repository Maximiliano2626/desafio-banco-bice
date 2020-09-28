import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDateComponent } from './search-date.component';

const routes: Routes = [
  {
      path: '',
      component: SearchDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDateRoutingModule { }
