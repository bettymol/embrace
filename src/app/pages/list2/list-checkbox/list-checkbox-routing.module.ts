import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCheckboxPage } from './list-checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: ListCheckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCheckboxPageRoutingModule {}
