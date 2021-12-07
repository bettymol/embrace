import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login5Page } from './login5.page';

const routes: Routes = [
  {
    path: '',
    component: Login5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login5PageRoutingModule {}
