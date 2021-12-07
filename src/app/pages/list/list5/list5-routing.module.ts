import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List5Page } from './list5.page';

const routes: Routes = [
  {
    path: '',
    component: List5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List5PageRoutingModule {}
