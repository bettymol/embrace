import {Component, OnInit} from '@angular/core';
import {Profile1Service} from './profile1.service';
import {timer} from 'rxjs';

@Component({
    selector: 'app-profile1',
    templateUrl: './profile1.page.html',
    styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
    user = {
        img: 'assets/images/avatar/5.jpg', name: 'Isabella', backImg: 'assets/images/profile/10.jpg'
    };
    list: any;
    isLoading = true;

    constructor(private service: Profile1Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(1500).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }
}
