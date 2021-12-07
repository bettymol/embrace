import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUp5Page } from './sign-up5.page';

const routes: Routes = [
  {
    path: '',
    component: SignUp5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUp5PageRoutingModule {}
