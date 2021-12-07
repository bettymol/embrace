import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUp2Page } from './sign-up2.page';

const routes: Routes = [
  {
    path: '',
    component: SignUp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUp2PageRoutingModule {}
