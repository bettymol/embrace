import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Tab1Page} from './tab1.page';


const routes: Routes = [
    {
        path: '', redirectTo: '/tab1/home', pathMatch: 'full'
    },
    {
        path: '',
        component: Tab1Page,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home1/home1.module').then(m => m.Home1PageModule)
            },
            {
                path: 'list',
                loadChildren: () => import('../../../pages/list/list1/list1.module').then(m => m.List1PageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile1/profile1.module').then(m => m.Profile1PageModule)
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Tab1PageRoutingModule {
}
