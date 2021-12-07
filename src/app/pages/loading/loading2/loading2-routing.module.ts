import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading2Page } from './loading2.page';

const routes: Routes = [
  {
    path: '',
    component: Loading2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading2PageRoutingModule {}
