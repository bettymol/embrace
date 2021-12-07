import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login1',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home1/home1.module').then(m => m.Home1PageModule)
    },
    {
        path: 'home2',
        loadChildren: () => import('./pages/home/home2/home2.module').then(m => m.Home2PageModule)
    },
    {
        path: 'home3',
        loadChildren: () => import('./pages/home/home3/home3.module').then(m => m.Home3PageModule)
    },
    {
        path: 'home4',
        loadChildren: () => import('./pages/home/home4/home4.module').then(m => m.Home4PageModule)
    },
    {
        path: 'home5',
        loadChildren: () => import('./pages/home/home5/home5.module').then(m => m.Home5PageModule)
    },
    {
        path: 'home6',
        loadChildren: () => import('./pages/home/home6/home6.module').then(m => m.Home6PageModule)
    },
    {
        path: 'home7',
        loadChildren: () => import('./pages/home/home7/home7.module').then(m => m.Home7PageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./pages/list/list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'list1',
        loadChildren: () => import('./pages/list/list1/list1.module').then(m => m.List1PageModule)
    },
    {
        path: 'list2',
        loadChildren: () => import('./pages/list/list2/list2.module').then(m => m.List2PageModule)
    },
    {
        path: 'list3',
        loadChildren: () => import('./pages/list/list3/list3.module').then(m => m.List3PageModule)
    },
    {
        path: 'list4',
        loadChildren: () => import('./pages/list/list4/list4.module').then(m => m.List4PageModule)
    },
    {
        path: 'list5',
        loadChildren: () => import('./pages/list/list5/list5.module').then(m => m.List5PageModule)
    },
    {
        path: 'list6',
        loadChildren: () => import('./pages/list/list6/list6.module').then(m => m.List6PageModule)
    },
    {
        path: 'animation-list1',
        loadChildren: () => import('./pages/animation/animation-list1/animation-list1.module').then(m => m.AnimationList1PageModule)
    },
    {
        path: 'animation-list2',
        loadChildren: () => import('./pages/animation/animation-list2/animation-list2.module').then(m => m.AnimationList2PageModule)
    },
    {
        path: 'animation-list3',
        loadChildren: () => import('./pages/animation/animation-list3/animation-list3.module').then(m => m.AnimationList3PageModule)
    },
    {
        path: 'animation-list4',
        loadChildren: () => import('./pages/animation/animation-list4/animation-list4.module').then(m => m.AnimationList4PageModule)
    },
    {
        path: 'animation-list5',
        loadChildren: () => import('./pages/animation/animation-list5/animation-list5.module').then(m => m.AnimationList5PageModule)
    },
    {
        path: 'animation-list6',
        loadChildren: () => import('./pages/animation/animation-list6/animation-list6.module').then(m => m.AnimationList6PageModule)
    },
    {
        path: 'animation-list7',
        loadChildren: () => import('./pages/animation/animation-list7/animation-list7.module').then(m => m.AnimationList7PageModule)
    },
    {
        path: 'list-sliding',
        loadChildren: () => import('./pages/list2/list-sliding/list-sliding.module').then(m => m.ListSlidingPageModule)
    },
    {
        path: 'list-reorder',
        loadChildren: () => import('./pages/list2/list-reorder/list-reorder.module').then(m => m.ListReorderPageModule)
    },
    {
        path: 'list-refresher',
        loadChildren: () => import('./pages/list2/list-refresher/list-refresher.module').then(m => m.ListRefresherPageModule)
    },
    {
        path: 'list-checkbox',
        loadChildren: () => import('./pages/list2/list-checkbox/list-checkbox.module').then(m => m.ListCheckboxPageModule)
    },
    {
        path: 'list-radio',
        loadChildren: () => import('./pages/list2/list-radio/list-radio.module').then(m => m.ListRadioPageModule)
    },
    {
        path: 'list-virtual-scroll',
        loadChildren: () => import('./pages/list2/list-virtual-scroll/list-virtual-scroll.module').then(m => m.ListVirtualScrollPageModule)
    },
    {
        path: 'list-select',
        loadChildren: () => import('./pages/list2/list-select/list-select.module').then(m => m.ListSelectPageModule)
    },
    {
        path: 'list-toggle',
        loadChildren: () => import('./pages/list2/list-toggle/list-toggle.module').then(m => m.ListTogglePageModule)
    },
    {
        path: 'loading1',
        loadChildren: () => import('./pages/loading/loading1/loading1.module').then(m => m.Loading1PageModule)
    },
    {
        path: 'loading2',
        loadChildren: () => import('./pages/loading/loading2/loading2.module').then(m => m.Loading2PageModule)
    },
    {
        path: 'loading3',
        loadChildren: () => import('./pages/loading/loading3/loading3.module').then(m => m.Loading3PageModule)
    },
    {
        path: 'loading4',
        loadChildren: () => import('./pages/loading/loading4/loading4.module').then(m => m.Loading4PageModule)
    },
    {
        path: 'loading5',
        loadChildren: () => import('./pages/loading/loading5/loading5.module').then(m => m.Loading5PageModule)
    },
    {
        path: 'loading6',
        loadChildren: () => import('./pages/loading/loading6/loading6.module').then(m => m.Loading6PageModule)
    },
    {
        path: 'loading7',
        loadChildren: () => import('./pages/loading/loading7/loading7.module').then(m => m.Loading7PageModule)
    },
    {
        path: 'loading8',
        loadChildren: () => import('./pages/loading/loading8/loading8.module').then(m => m.Loading8PageModule)
    },
    {
        path: 'card1',
        loadChildren: () => import('./pages/card/card1/card1.module').then(m => m.Card1PageModule)
    },
    {
        path: 'card2',
        loadChildren: () => import('./pages/card/card2/card2.module').then(m => m.Card2PageModule)
    },
    {
        path: 'card3',
        loadChildren: () => import('./pages/card/card3/card3.module').then(m => m.Card3PageModule)
    },
    {
        path: 'card4',
        loadChildren: () => import('./pages/card/card4/card4.module').then(m => m.Card4PageModule)
    },
    {
        path: 'card5',
        loadChildren: () => import('./pages/card/card5/card5.module').then(m => m.Card5PageModule)
    },
    {
        path: 'card6',
        loadChildren: () => import('./pages/card/card6/card6.module').then(m => m.Card6PageModule)
    },
    {
        path: 'card7',
        loadChildren: () => import('./pages/card/card7/card7.module').then(m => m.Card7PageModule)
    },
    {
        path: 'login1',
        loadChildren: () => import('./pages/login/login1/login1.module').then(m => m.Login1PageModule)
    },
    {
        path: 'login2',
        loadChildren: () => import('./pages/login/login2/login2.module').then(m => m.Login2PageModule)
    },
    {
        path: 'login3',
        loadChildren: () => import('./pages/login/login3/login3.module').then(m => m.Login3PageModule)
    },
    {
        path: 'login4',
        loadChildren: () => import('./pages/login/login4/login4.module').then(m => m.Login4PageModule)
    },
    {
        path: 'login5',
        loadChildren: () => import('./pages/login/login5/login5.module').then(m => m.Login5PageModule)
    },
    {
        path: 'login6',
        loadChildren: () => import('./pages/login/login6/login6.module').then(m => m.Login6PageModule)
    },
    {
        path: 'login7',
        loadChildren: () => import('./pages/login/login7/login7.module').then(m => m.Login7PageModule)
    },
    {
        path: 'sign-up1',
        loadChildren: () => import('./pages/sign-up/sign-up1/sign-up1.module').then(m => m.SignUp1PageModule)
    },
    {
        path: 'sign-up2',
        loadChildren: () => import('./pages/sign-up/sign-up2/sign-up2.module').then(m => m.SignUp2PageModule)
    },
    {
        path: 'sign-up3',
        loadChildren: () => import('./pages/sign-up/sign-up3/sign-up3.module').then(m => m.SignUp3PageModule)
    },
    {
        path: 'sign-up4',
        loadChildren: () => import('./pages/sign-up/sign-up4/sign-up4.module').then(m => m.SignUp4PageModule)
    },
    {
        path: 'sign-up5',
        loadChildren: () => import('./pages/sign-up/sign-up5/sign-up5.module').then(m => m.SignUp5PageModule)
    },
    {
        path: 'sign-up6',
        loadChildren: () => import('./pages/sign-up/sign-up6/sign-up6.module').then(m => m.SignUp6PageModule)
    },
    {
        path: 'sign-up7',
        loadChildren: () => import('./pages/sign-up/sign-up7/sign-up7.module').then(m => m.SignUp7PageModule)
    },
    {
        path: 'profile1',
        loadChildren: () => import('./pages/profile/profile1/profile1.module').then(m => m.Profile1PageModule)
    },
    {
        path: 'profile2',
        loadChildren: () => import('./pages/profile/profile2/profile2.module').then(m => m.Profile2PageModule)
    },
    {
        path: 'profile3',
        loadChildren: () => import('./pages/profile/profile3/profile3.module').then(m => m.Profile3PageModule)
    },
    {
        path: 'profile4',
        loadChildren: () => import('./pages/profile/profile4/profile4.module').then(m => m.Profile4PageModule)
    },
    {
        path: 'profile5',
        loadChildren: () => import('./pages/profile/profile5/profile5.module').then(m => m.Profile5PageModule)
    },
    {
        path: 'profile6',
        loadChildren: () => import('./pages/profile/profile6/profile6.module').then(m => m.Profile6PageModule)
    },
    {
        path: 'profile7',
        loadChildren: () => import('./pages/profile/profile7/profile7.module').then(m => m.Profile7PageModule)
    },
    {
        path: 'tab1',
        loadChildren: () => import('./pages/tabs/tab1/tab1.module').then(m => m.Tab1PageModule)
    },
    {
        path: 'tab2',
        loadChildren: () => import('./pages/tabs/tab2/tab2.module').then(m => m.Tab2PageModule)
    },
    {
        path: 'tab3',
        loadChildren: () => import('./pages/tabs/tab3/tab3.module').then(m => m.Tab3PageModule)
    },
    {
        path: 'tab4',
        loadChildren: () => import('./pages/tabs/tab4/tab4.module').then(m => m.Tab4PageModule)
    },
    {
        path: 'tab5',
        loadChildren: () => import('./pages/tabs/tab5/tab5.module').then(m => m.Tab5PageModule)
    },
    {
        path: 'tab6',
        loadChildren: () => import('./pages/tabs/tab6/tab6.module').then(m => m.Tab6PageModule)
    },
    {
        path: 'tab7',
        loadChildren: () => import('./pages/tabs/tab7/tab7.module').then(m => m.Tab7PageModule)
    },
    {
        path: 'slide1',
        loadChildren: () => import('./pages/slides/slide1/slide1.module').then(m => m.Slide1PageModule)
    },
    {
        path: 'slide2',
        loadChildren: () => import('./pages/slides/slide2/slide2.module').then(m => m.Slide2PageModule)
    },
    {
        path: 'slide3',
        loadChildren: () => import('./pages/slides/slide3/slide3.module').then(m => m.Slide3PageModule)
    },
    {
        path: 'slide4',
        loadChildren: () => import('./pages/slides/slide4/slide4.module').then(m => m.Slide4PageModule)
    },
    {
        path: 'slide5',
        loadChildren: () => import('./pages/slides/slide5/slide5.module').then(m => m.Slide5PageModule)
    },
    {
        path: 'slide6',
        loadChildren: () => import('./pages/slides/slide6/slide6.module').then(m => m.Slide6PageModule)
    },
    {
        path: 'slide7',
        loadChildren: () => import('./pages/slides/slide7/slide7.module').then(m => m.Slide7PageModule)
    },
    {
        path: 'scroll1',
        loadChildren: () => import('./pages/scroll/scroll1/scroll1.module').then(m => m.Scroll1PageModule)
    },
    {
        path: 'scroll2',
        loadChildren: () => import('./pages/scroll/scroll2/scroll2.module').then(m => m.Scroll2PageModule)
    },
    {
        path: 'scroll3',
        loadChildren: () => import('./pages/scroll/scroll3/scroll3.module').then(m => m.Scroll3PageModule)
    },
    {
        path: 'scroll4',
        loadChildren: () => import('./pages/scroll/scroll4/scroll4.module').then(m => m.Scroll4PageModule)
    },
    {
        path: 'scroll5',
        loadChildren: () => import('./pages/scroll/scroll5/scroll5.module').then(m => m.Scroll5PageModule)
    },
    {
        path: 'scroll6',
        loadChildren: () => import('./pages/scroll/scroll6/scroll6.module').then(m => m.Scroll6PageModule)
    },
    {
        path: 'scroll7',
        loadChildren: () => import('./pages/scroll/scroll7/scroll7.module').then(m => m.Scroll7PageModule)
    },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'contribute',
    loadChildren: () => import('./pages/contribute/contribute.module').then( m => m.ContributePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'claim',
    loadChildren: () => import('./pages/claim/claim.module').then( m => m.ClaimPageModule)
  },
  {
    path: 'claimlist',
    loadChildren: () => import('./pages/claimlist/claimlist.module').then( m => m.ClaimlistPageModule)
  },
  {
    path: 'claim-details',
    loadChildren: () => import('./pages/claim-details/claim-details.module').then( m => m.ClaimDetailsPageModule)
  },
  {
    path: 'donate-details',
    loadChildren: () => import('./pages/donate-details/donate-details.module').then( m => m.DonateDetailsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
