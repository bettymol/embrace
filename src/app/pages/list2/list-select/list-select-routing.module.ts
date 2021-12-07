import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSelectPage } from './list-select.page';

const routes: Routes = [
  {
    path: '',
    component: ListSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSelectPageRoutingModule {}
