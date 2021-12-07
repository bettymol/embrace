import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login6Page } from './login6.page';

const routes: Routes = [
  {
    path: '',
    component: Login6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login6PageRoutingModule {}
