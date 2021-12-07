import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUp1Page } from './sign-up1.page';

const routes: Routes = [
  {
    path: '',
    component: SignUp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUp1PageRoutingModule {}
