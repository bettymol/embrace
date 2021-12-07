import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Tab2Page} from './tab2.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tab2/home', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab2Page,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home2/home2.module').then(m => m.Home2PageModule)
            },
            {
                path: 'list',
                loadChildren: () => import('../../../pages/list/list2/list2.module').then(m => m.List2PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile2/profile2.module').then(m => m.Profile2PageModule)
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab2PageRoutingModule {
}
