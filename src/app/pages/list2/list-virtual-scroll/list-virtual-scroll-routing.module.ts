import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVirtualScrollPage } from './list-virtual-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: ListVirtualScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListVirtualScrollPageRoutingModule {}
