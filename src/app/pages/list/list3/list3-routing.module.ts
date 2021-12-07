import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List3Page } from './list3.page';

const routes: Routes = [
  {
    path: '',
    component: List3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List3PageRoutingModule {}
