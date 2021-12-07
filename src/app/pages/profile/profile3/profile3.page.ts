import {Component, OnInit} from '@angular/core';
import {Profile1Service} from '../profile1/profile1.service';
import {timer} from 'rxjs';

@Component({
    selector: 'app-profile3',
    templateUrl: './profile3.page.html',
    styleUrls: ['./profile3.page.scss'],
})
export class Profile3Page implements OnInit {
    user = {
        img: 'assets/images/avatar/1.jpg', name: 'Caroline', backImg: 'assets/images/profile/7.jpg'
    };
    list: any;
    isLoading = true;

    constructor(private service: Profile1Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

}
