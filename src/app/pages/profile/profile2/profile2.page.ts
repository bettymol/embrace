import {Component, OnInit} from '@angular/core';
import {Profile1Service} from '../profile1/profile1.service';
import {timer} from 'rxjs';

@Component({
    selector: 'app-profile2',
    templateUrl: './profile2.page.html',
    styleUrls: ['./profile2.page.scss'],
})
export class Profile2Page implements OnInit {
    user = {
        img: 'assets/images/avatar/5.jpg', name: 'Olivia'
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
