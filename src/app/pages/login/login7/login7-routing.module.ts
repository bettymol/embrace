import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login7Page } from './login7.page';

const routes: Routes = [
  {
    path: '',
    component: Login7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login7PageRoutingModule {}
