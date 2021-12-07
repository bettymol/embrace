import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Tab7Page} from './tab7.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tab7/card', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab7Page,
        children: [
            {
                path: 'card',
                loadChildren: () => import('../../../pages/card/card7/card7.module').then(m => m.Card7PageModule)
            },
            {
                path: 'sign',
                loadChildren: () => import('../../../pages/sign-up/sign-up6/sign-up6.module').then(m => m.SignUp6PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile7/profile7.module').then(m => m.Profile7PageModule)
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab7PageRoutingModule {
}
