import {Component, QueryList, ViewChildren} from '@angular/core';

import {IonRouterOutlet, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ToastProvider} from './shared/providers';
import {AuthService} from './shared/auth.service';
import { Router } from '@angular/router';
import {StorageService} from './storage.service';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    lastBackPress = 0;
    timePeriodToExit = 2000;
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
    
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private toastProvider: ToastProvider,
        public authService:AuthService,
        private router: Router,
        public storageService: StorageService,
        
        private http: HttpClient
    ) {
        this.initializeApp();
    }
devtype:any;
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.backButton();
    
        });
    }
 
    backButton() {
        this.platform.backButton.subscribe(async () => {
            this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                } else {
                    if (new Date().getTime() - this.lastBackPress < this.timePeriodToExit) {
                        navigator['app'].exitApp();
                    } else {
                        this.toastProvider.show('Press back again to exit App');
                        this.lastBackPress = new Date().getTime();
                    }
                }
            });
        });
    }
    tabclick(menu,link)
  {
      this.router.navigate(['/'+link.toLowerCase()]);
    }
    logout()
    {
         this.storageService.clear()
   this.router.navigate(['/login1']);
    }
}
