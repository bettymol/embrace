import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUp4Page } from './sign-up4.page';

const routes: Routes = [
  {
    path: '',
    component: SignUp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUp4PageRoutingModule {}
