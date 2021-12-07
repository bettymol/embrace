import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRefresherPage } from './list-refresher.page';

const routes: Routes = [
  {
    path: '',
    component: ListRefresherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRefresherPageRoutingModule {}
