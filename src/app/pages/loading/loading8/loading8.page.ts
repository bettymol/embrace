import {Component, OnInit} from '@angular/core';
import {Loading8Service} from './loading8.service';
import {AlertProvider, LoadingProvider} from '../../../shared/providers';
import {timer} from 'rxjs';

@Component({
    selector: 'app-loading8',
    templateUrl: './loading8.page.html',
    styleUrls: ['./loading8.page.scss'],
})
export class Loading8Page implements OnInit {
    list: Array<any>;
    isLoading = true;

    constructor(private service: Loading8Service,
                private loadingProvider: LoadingProvider,
                private alertProvider: AlertProvider) {
    }

    ngOnInit() {
    }

    async load() {
        const loader = await this.loadingProvider.create();
        await loader.present();
        timer(2000).subscribe(r => {
            loader.dismiss().then(() => {
                this.list = this.service.getList();
            });
        }, error => loader.dismiss().then(() => this.alertProvider.present(error)));
    }

}
