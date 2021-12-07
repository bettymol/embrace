import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUp6Page } from './sign-up6.page';

const routes: Routes = [
  {
    path: '',
    component: SignUp6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUp6PageRoutingModule {}
