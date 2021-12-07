import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading5Page } from './loading5.page';

const routes: Routes = [
  {
    path: '',
    component: Loading5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading5PageRoutingModule {}
