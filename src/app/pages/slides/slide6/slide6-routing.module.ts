import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slide6Page } from './slide6.page';

const routes: Routes = [
  {
    path: '',
    component: Slide6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slide6PageRoutingModule {}
