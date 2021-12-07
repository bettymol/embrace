import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUp7Page } from './sign-up7.page';

const routes: Routes = [
  {
    path: '',
    component: SignUp7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUp7PageRoutingModule {}
