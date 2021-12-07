import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List6Page } from './list6.page';

const routes: Routes = [
  {
    path: '',
    component: List6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List6PageRoutingModule {}
