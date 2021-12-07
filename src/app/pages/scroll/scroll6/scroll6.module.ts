import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Scroll6PageRoutingModule} from './scroll6-routing.module';
import {Scroll6Page} from './scroll6.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Scroll6PageRoutingModule,
        ComponentsModule
    ],
    declarations: [Scroll6Page]
})
export class Scroll6PageModule {
}
