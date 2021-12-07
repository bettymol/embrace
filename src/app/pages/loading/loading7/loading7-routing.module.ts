import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading7Page } from './loading7.page';

const routes: Routes = [
  {
    path: '',
    component: Loading7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loading7PageRoutingModule {}
