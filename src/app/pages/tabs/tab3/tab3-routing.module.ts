import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Tab3Page} from './tab3.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tab3/home', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab3Page,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home3/home3.module').then(m => m.Home3PageModule)
            },
            {
                path: 'card',
                loadChildren: () => import('../../../pages/card/card1/card1.module').then(m => m.Card1PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile3/profile3.module').then(m => m.Profile3PageModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab3PageRoutingModule {
}
