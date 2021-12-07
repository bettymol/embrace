import {Component, OnInit} from '@angular/core';
import {Home1Service} from './home1.service';
import {AuthService} from '../../../shared/auth.service';
import {MenuController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
    selector: 'app-home1',
    templateUrl: './home1.page.html',
    styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
    list: Array<string>;
    list1: Array<any>;
    fList: Array<any>;
    tList: Array<any>;
    newList: Array<any>;

    option = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => '<span class="' + className + '">' + (index + 1) + '</span>',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    };

    constructor(private service: Home1Service ,public menuCtrl: MenuController,public authService:AuthService,private router: Router) {
        this.list = this.service.getBannerList();
        this.list1 = this.service.getList();
        this.fList = this.service.getFList();
        this.tList = this.service.getTList();
        this.newList = this.service.getNewList();

    }
    ionViewWillEnter() {
        
        this.menuCtrl.enable(true);
       // alert("hbb")
    }
    tabclick(menu)
    {
      this.router.navigate(['/'+menu.toLowerCase()]);  
    }
    ngOnInit() {
        this.authService.getsidemenu();
    }

}
