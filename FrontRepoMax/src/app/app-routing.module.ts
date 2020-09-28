import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/menu-options/menu-options.module').then(m => m.MenuOptionsModule),
    pathMatch: 'full'
  },
  {
    path: 'select-option',
    loadChildren: () => import('./pages/select-option/select-option.module').then(m => m.SelectOptionModule),
    pathMatch: 'full'
  },
  {
    path: 'last-values-elements',
    loadChildren: () => import('./pages/last-values-elements/last-values-elements.module').then(m => m.LastValuesElementsModule),
    pathMatch: 'full'
  },
  {
    path: 'search-date',
    loadChildren: () => import('./pages/search-date/search-date.module').then(m => m.SearchDateModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
