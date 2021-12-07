import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomSlidesAnimationComponent} from './custom-slides-animation/custom-slides-animation.component';
import {CustomSlidesFullComponent} from './custom-slides-full/custom-slides-full.component';
import {CustomSideMenuComponent} from './custom-side-menu/custom-side-menu.component';
import {CustomHeaderComponent} from './custom-header/custom-header.component';
import {CustomPaginationComponent} from './custom-pagination/custom-pagination.component';
import {CustomSideRightComponent} from './custom-side-right/custom-side-right.component';
import {CustomProductListComponent} from './custom-product-list/custom-product-list.component';
import {CustomHeader1Component} from './custom-header1/custom-header1.component';
import {CustomProductList1Component} from './custom-product-list1/custom-product-list1.component';
import {CustomProductList3Component} from './custom-product-list3/custom-product-list3.component';
import {CustomProductList4Component} from './custom-product-list4/custom-product-list4.component';
import {CustomProductList5Component} from './custom-product-list5/custom-product-list5.component';
import {CustomProductList6Component} from './custom-product-list6/custom-product-list6.component';
import {CustomAnimationList1Component} from './custom-animation-list1/custom-animation-list1.component';
import {CustomAnimationList2Component} from './custom-animation-list2/custom-animation-list2.component';
import {CustomAnimationList3Component} from './custom-animation-list3/custom-animation-list3.component';
import {CustomAnimationList4Component} from './custom-animation-list4/custom-animation-list4.component';
import {CustomAnimationList5Component} from './custom-animation-list5/custom-animation-list5.component';
import {CustomAnimationList6Component} from './custom-animation-list6/custom-animation-list6.component';
import {CustomAnimationList7Component} from './custom-animation-list7/custom-animation-list7.component';
import {CustomListSlidingComponent} from './custom-list-sliding/custom-list-sliding.component';
import {CustomListReorderComponent} from './custom-list-reorder/custom-list-reorder.component';
import {CustomListRefresherComponent} from './custom-list-refresher/custom-list-refresher.component';
import {CustomListCheckboxComponent} from './custom-list-checkbox/custom-list-checkbox.component';
import {CustomListToggleComponent} from './custom-list-toggle/custom-list-toggle.component';
import {CustomLoading2Component} from './custom-loading2/custom-loading2.component';
import {CustomLoading3Component} from './custom-loading3/custom-loading3.component';
import {CustomSkeletonComponent} from './custom-skeleton/custom-skeleton.component';
import {CustomLoading4Component} from './custom-loading4/custom-loading4.component';
import {CustomSkeletonCardComponent} from './custom-skeleton-card/custom-skeleton-card.component';
import {CustomLoading5Component} from './custom-loading5/custom-loading5.component';
import {CustomLoading6Component} from './custom-loading6/custom-loading6.component';
import {CustomSkeletonProfileComponent} from './custom-skeleton-profile/custom-skeleton-profile.component';
import {CustomLoading7Component} from './custom-loading7/custom-loading7.component';
import {CustomSkeletonCard2Component} from './custom-skeleton-card2/custom-skeleton-card2.component';
import {CustomSlideComponent} from './custom-slide/custom-slide.component';
import {CustomSkeletonImgComponent} from './custom-skeleton-img/custom-skeleton-img.component';
import {CustomLoading8Component} from './custom-loading8/custom-loading8.component';
import {CustomCard1Component} from './custom-card1/custom-card1.component';
import {CustomSkeletonFreshComponent} from './custom-skeleton-fresh/custom-skeleton-fresh.component';
import {CustomCard2Component} from './custom-card2/custom-card2.component';
import {CustomSkeletonCard2ListComponent} from './custom-skeleton-card2-list/custom-skeleton-card2-list.component';
import {CustomCard3Component} from './custom-card3/custom-card3.component';
import {CustomSkeletonCard3Component} from './custom-skeleton-card3/custom-skeleton-card3.component';
import {CustomCard4Component} from './custom-card4/custom-card4.component';
import {CustomSkeletonCard4Component} from './custom-skeleton-card4/custom-skeleton-card4.component';
import {CustomCard5Component} from './custom-card5/custom-card5.component';
import {CustomSkeletonCard5Component} from './custom-skeleton-card5/custom-skeleton-card5.component';
import {CustomCard6Component} from './custom-card6/custom-card6.component';
import {CustomCard7Component} from './custom-card7/custom-card7.component';
import {CustomSkeletonCard7Component} from './custom-skeleton-card7/custom-skeleton-card7.component';
import {CustomLogin3Component} from './custom-login3/custom-login3.component';
import {CustomSignUp1Component} from './custom-sign-up1/custom-sign-up1.component';
import {CustomSignUp2Component} from './custom-sign-up2/custom-sign-up2.component';
import {CustomSignUp4Component} from './custom-sign-up4/custom-sign-up4.component';
import {CustomSignUp5Component} from './custom-sign-up5/custom-sign-up5.component';
import {CustomSignUp6Component} from './custom-sign-up6/custom-sign-up6.component';
import {CustomProfile1Component} from './custom-profile1/custom-profile1.component';
import {CustomSkeletonProfile1Component} from './custom-skeleton-profile1/custom-skeleton-profile1.component';
import {CustomProfile2Component} from './custom-profile2/custom-profile2.component';
import {CustomSkeletonProfile2Component} from './custom-skeleton-profile2/custom-skeleton-profile2.component';
import {CustomProfile3Component} from './custom-profile3/custom-profile3.component';
import {CustomSkeletonProfile3Component} from './custom-skeleton-profile3/custom-skeleton-profile3.component';
import {CustomProfile4Component} from './custom-profile4/custom-profile4.component';
import {CustomSkeletonProfile4Component} from './custom-skeleton-profile4/custom-skeleton-profile4.component';
import {CustomProfile5Component} from './custom-profile5/custom-profile5.component';
import {CustomSkeletonProfile5Component} from './custom-skeleton-profile5/custom-skeleton-profile5.component';
import {CustomProfile6Component} from './custom-profile6/custom-profile6.component';
import {CustomSkeletonProfile6Component} from './custom-skeleton-profile6/custom-skeleton-profile6.component';
import {CustomProfile7Component} from './custom-profile7/custom-profile7.component';
import {CustomSkeletonProfile7Component} from './custom-skeleton-profile7/custom-skeleton-profile7.component';
import {CustomSlidesComponent} from './custom-slides/custom-slides.component';
import {CustomScroll2Component} from './custom-scroll2/custom-scroll2.component';
import {CustomScroll3Component} from './custom-scroll3/custom-scroll3.component';
import {CustomScroll4Component} from './custom-scroll4/custom-scroll4.component';
import {CustomScroll5Component} from './custom-scroll5/custom-scroll5.component';
import {CustomScroll6Component} from './custom-scroll6/custom-scroll6.component';
import {CustomStepperComponent} from './custom-stepper/custom-stepper.component';
import {CustomScroll7Component} from './custom-scroll7/custom-scroll7.component';
import {CustomSideCartComponent} from './custom-side-cart/custom-side-cart.component';
import {CustomSignUp7Component} from './custom-sign-up7/custom-sign-up7.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CustomSlidesAnimationComponent,
        CustomSlidesFullComponent,
        CustomSideMenuComponent,
        CustomHeaderComponent,
        CustomHeader1Component,
        CustomPaginationComponent,
        CustomSideRightComponent,
        CustomProductListComponent,
        CustomProductList1Component,
        CustomProductList3Component,
        CustomProductList4Component,
        CustomProductList5Component,
        CustomProductList6Component,
        CustomAnimationList1Component,
        CustomAnimationList2Component,
        CustomAnimationList3Component,
        CustomAnimationList4Component,
        CustomAnimationList5Component,
        CustomAnimationList6Component,
        CustomAnimationList7Component,
        CustomListSlidingComponent,
        CustomListReorderComponent,
        CustomListRefresherComponent,
        CustomListCheckboxComponent,
        CustomListToggleComponent,
        CustomLoading2Component,
        CustomLoading3Component,
        CustomSkeletonComponent,
        CustomLoading4Component,
        CustomSkeletonCardComponent,
        CustomLoading5Component,
        CustomLoading6Component,
        CustomSkeletonProfileComponent,
        CustomLoading7Component,
        CustomSkeletonCard2Component,
        CustomSlideComponent,
        CustomSkeletonImgComponent,
        CustomLoading8Component,
        CustomCard1Component,
        CustomSkeletonFreshComponent,
        CustomCard2Component,
        CustomSkeletonCard2ListComponent,
        CustomCard3Component,
        CustomSkeletonCard3Component,
        CustomCard4Component,
        CustomSkeletonCard4Component,
        CustomCard5Component,
        CustomSkeletonCard5Component,
        CustomCard6Component,
        CustomCard7Component,
        CustomSkeletonCard7Component,
        CustomLogin3Component,
        CustomSignUp1Component,
        CustomSignUp2Component,
        CustomSignUp4Component,
        CustomSignUp5Component,
        CustomSignUp6Component,
        CustomProfile1Component,
        CustomSkeletonProfile1Component,
        CustomProfile2Component,
        CustomSkeletonProfile2Component,
        CustomProfile3Component,
        CustomSkeletonProfile3Component,
        CustomProfile4Component,
        CustomSkeletonProfile4Component,
        CustomProfile5Component,
        CustomSkeletonProfile5Component,
        CustomProfile6Component,
        CustomSkeletonProfile6Component,
        CustomProfile7Component,
        CustomSkeletonProfile7Component,
        CustomSlidesComponent,
        CustomScroll2Component,
        CustomScroll3Component,
        CustomScroll4Component,
        CustomScroll5Component,
        CustomScroll6Component,
        CustomStepperComponent,
        CustomScroll7Component,
        CustomSideCartComponent,
        CustomSignUp7Component
    ],
    exports: [
        CustomSlidesAnimationComponent,
        CustomSlidesFullComponent,
        CustomSideMenuComponent,
        CustomHeaderComponent,
        CustomHeader1Component,
        CustomPaginationComponent,
        CustomSideRightComponent,
        CustomProductListComponent,
        CustomProductList1Component,
        CustomProductList3Component,
        CustomProductList4Component,
        CustomProductList5Component,
        CustomProductList6Component,
        CustomAnimationList1Component,
        CustomAnimationList2Component,
        CustomAnimationList3Component,
        CustomAnimationList4Component,
        CustomAnimationList5Component,
        CustomAnimationList6Component,
        CustomAnimationList7Component,
        CustomListSlidingComponent,
        CustomListReorderComponent,
        CustomListRefresherComponent,
        CustomListCheckboxComponent,
        CustomListToggleComponent,
        CustomLoading2Component,
        CustomLoading3Component,
        CustomSkeletonComponent,
        CustomLoading4Component,
        CustomSkeletonCardComponent,
        CustomLoading5Component,
        CustomLoading6Component,
        CustomSkeletonProfileComponent,
        CustomLoading7Component,
        CustomSkeletonCard2Component,
        CustomSlideComponent,
        CustomSkeletonImgComponent,
        CustomLoading8Component,
        CustomCard1Component,
        CustomSkeletonFreshComponent,
        CustomCard2Component,
        CustomSkeletonCard2ListComponent,
        CustomCard3Component,
        CustomSkeletonCard3Component,
        CustomCard4Component,
        CustomSkeletonCard4Component,
        CustomCard5Component,
        CustomSkeletonCard5Component,
        CustomCard6Component,
        CustomCard7Component,
        CustomSkeletonCard7Component,
        CustomLogin3Component,
        CustomSignUp1Component,
        CustomSignUp2Component,
        CustomSignUp4Component,
        CustomSignUp5Component,
        CustomSignUp6Component,
        CustomProfile1Component,
        CustomSkeletonProfile1Component,
        CustomProfile2Component,
        CustomSkeletonProfile2Component,
        CustomProfile3Component,
        CustomSkeletonProfile3Component,
        CustomProfile4Component,
        CustomSkeletonProfile4Component,
        CustomProfile5Component,
        CustomSkeletonProfile5Component,
        CustomProfile6Component,
        CustomSkeletonProfile6Component,
        CustomProfile7Component,
        CustomSkeletonProfile7Component,
        CustomSlidesComponent,
        CustomScroll2Component,
        CustomScroll3Component,
        CustomScroll4Component,
        CustomScroll5Component,
        CustomScroll6Component,
        CustomStepperComponent,
        CustomScroll7Component,
        CustomSideCartComponent,
        CustomSignUp7Component
    ],
    entryComponents: [],
})
export class ComponentsModule {
}
