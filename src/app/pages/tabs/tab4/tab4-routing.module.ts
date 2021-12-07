import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Tab4Page} from './tab4.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tab4/home', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab4Page,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home4/home4.module').then(m => m.Home4PageModule)
            },
            {
                path: 'card',
                loadChildren: () => import('../../../pages/card/card2/card2.module').then(m => m.Card2PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile4/profile4.module').then(m => m.Profile4PageModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab4PageRoutingModule {
}
