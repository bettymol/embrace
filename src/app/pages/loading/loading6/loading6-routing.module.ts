import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading6Page } from './loading6.page';

const routes: Routes = [
  {
    path: '',
    component: Loading6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading6PageRoutingModule {}
