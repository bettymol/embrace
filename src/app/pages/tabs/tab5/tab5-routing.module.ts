import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Tab5Page} from './tab5.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tab5/home', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab5Page,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home5/home5.module').then(m => m.Home5PageModule)
            },
            {
                path: 'card',
                loadChildren: () => import('../../../pages/card/card5/card5.module').then(m => m.Card5PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile5/profile5.module').then(m => m.Profile5PageModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab5PageRoutingModule {
}
