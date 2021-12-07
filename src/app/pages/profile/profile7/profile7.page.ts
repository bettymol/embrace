import {Component, OnInit, ViewChild} from '@angular/core';
import {timer} from 'rxjs';
import {Profile7Service} from './profile7.service';
import {IonContent} from '@ionic/angular';
import {ScrollDetail} from '@ionic/core';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
    selector: 'app-profile7',
    templateUrl: './profile7.page.html',
    styleUrls: ['./profile7.page.scss'],
})
export class Profile7Page implements OnInit {
    selectType = 'feed';
    segmentList = ['feed', 'friends', 'groups'];
    user: any;
    fList: any;
    friendList: any;
    groupList: any;
    isLoading = true;
    @ViewChild(IonContent, {static: true}) content: IonContent;
    isActive = false;

    constructor(private service: Profile7Service) {
        this.user = this.service.getUser();
        this.fList = this.service.getList();
        this.friendList = this.service.getFriendList();
        this.groupList = this.service.getGroupList();
    }

    ngOnInit() {
        timer(2000).subscribe(r => {
            this.isLoading = !this.isLoading;
        });
    }

    onScroll($event: CustomEvent<ScrollDetail>) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.isActive = scrollTop >= 220;
        }
    }

}
