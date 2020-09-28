import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastValuesElementsComponent } from './last-values-elements.component';

const routes: Routes = [
  {
      path: '',
      component: LastValuesElementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastValuesElementsRoutingModule { }
