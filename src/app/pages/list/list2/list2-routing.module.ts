import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List2Page } from './list2.page';

const routes: Routes = [
  {
    path: '',
    component: List2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List2PageRoutingModule {}
