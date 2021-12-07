import {Component, OnInit} from '@angular/core';
import {ListCheckboxService} from './list-checkbox.service';
import {CheckModel} from '../../../components/custom-list-checkbox/check.model';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-list-checkbox',
    templateUrl: './list-checkbox.page.html',
    styleUrls: ['./list-checkbox.page.scss'],
})
export class ListCheckboxPage implements OnInit {
    list: Array<CheckModel>;

    constructor(private service: ListCheckboxService,
                private toastProvider: ToastProvider) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    onCheck() {
        const cList = this.list.filter(s => s.checked).map(c => c.title);
        this.toastProvider.show(JSON.stringify(cList));
    }

}
