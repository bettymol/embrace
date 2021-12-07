import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Profile4Service} from './profile4.service';

@Component({
    selector: 'app-profile4',
    templateUrl: './profile4.page.html',
    styleUrls: ['./profile4.page.scss'],
})
export class Profile4Page implements OnInit {
    user = {
        img: 'assets/images/avatar/1.jpg', name: 'Gianna', backImg: 'assets/images/profile/8.jpg'
    };
    list: any;
    list1: any;
    list2: any;
    isLoading = true;

    constructor(private service: Profile4Service) {
        this.list = this.service.getList();
        this.list1 = this.service.getList1();
        this.list2 = this.service.getList2();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }


}
