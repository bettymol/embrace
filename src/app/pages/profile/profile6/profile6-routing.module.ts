import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile6Page } from './profile6.page';

const routes: Routes = [
  {
    path: '',
    component: Profile6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile6PageRoutingModule {}
