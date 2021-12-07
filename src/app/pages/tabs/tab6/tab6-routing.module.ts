import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Tab6Page} from './tab6.page';


const routes: Routes = [
    {
        path: '', redirectTo: '/tab6/home', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab6Page,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home6/home6.module').then(m => m.Home6PageModule)
            },
            {
                path: 'card',
                loadChildren: () => import('../../../pages/card/card6/card6.module').then(m => m.Card6PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile6/profile6.module').then(m => m.Profile6PageModule)
            },
            {
                path: 'flip',
                loadChildren: () => import('../../../pages/animation/animation-list1/animation-list1.module').then(m => m.AnimationList1PageModule)
            },
            {
                path: 'load',
                loadChildren: () => import('../../../pages/loading/loading1/loading1.module').then(m => m.Loading1PageModule)
            },
            {
                path: 'login',
                loadChildren: () => import('../../../pages/login/login1/login1.module').then(m => m.Login1PageModule)
            },
            {
                path: 'sign',
                loadChildren: () => import('../../../pages/sign-up/sign-up1/sign-up1.module').then(m => m.SignUp1PageModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab6PageRoutingModule {
}
