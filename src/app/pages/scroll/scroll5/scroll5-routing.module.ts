import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scroll5Page } from './scroll5.page';

const routes: Routes = [
  {
    path: '',
    component: Scroll5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Scroll5PageRoutingModule {}
