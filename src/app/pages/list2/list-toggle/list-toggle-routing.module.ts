import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTogglePage } from './list-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: ListTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTogglePageRoutingModule {}
