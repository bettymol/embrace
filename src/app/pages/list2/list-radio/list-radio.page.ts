import {Component, OnInit} from '@angular/core';
import {CheckModel} from '../../../components/custom-list-checkbox/check.model';
import {ListCheckboxService} from '../list-checkbox/list-checkbox.service';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-list-radio',
    templateUrl: './list-radio.page.html',
    styleUrls: ['./list-radio.page.scss'],
})
export class ListRadioPage implements OnInit {
    selected: string;
    list: Array<CheckModel>;
    iconList = [1, 2, 3, 4, 5];

    constructor(private service: ListCheckboxService,
                private toastProvider: ToastProvider) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    onCheck() {
        console.log(this.selected);
        this.toastProvider.show(this.selected);
    }

}
