import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Profile6Service} from './profile6.service';

@Component({
    selector: 'app-profile6',
    templateUrl: './profile6.page.html',
    styleUrls: ['./profile6.page.scss'],
})
export class Profile6Page implements OnInit {
    user = {
        img: 'assets/images/avatar/1.jpg', name: 'Gabrielle', location: '21, New York', backImg: 'assets/images/profile/9.jpg'
    };
    list: any;
    isLoading = true;

    constructor(private service: Profile6Service) {
        this.list = this.service.getList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

}
