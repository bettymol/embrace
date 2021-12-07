import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile7Page } from './profile7.page';

const routes: Routes = [
  {
    path: '',
    component: Profile7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile7PageRoutingModule {}
