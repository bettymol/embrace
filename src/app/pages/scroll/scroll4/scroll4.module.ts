import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Scroll4PageRoutingModule} from './scroll4-routing.module';
import {Scroll4Page} from './scroll4.page';
import {ComponentsModule} from '../../../components/components.module';
import {PhotosPage} from '../../photos/photos.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll4PageRoutingModule,
        ComponentsModule
    ],
    declarations: [Scroll4Page, PhotosPage],
    entryComponents: [PhotosPage]
})
export class Scroll4PageModule {
}
