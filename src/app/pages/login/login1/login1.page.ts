import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import { MenuController,Platform} from '@ionic/angular'

import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../../../storage.service';
import {AuthService} from '../../../shared/auth.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
@Component({
    selector: 'app-login1',
    templateUrl: './login1.page.html',
    styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
    loginForm: FormGroup;
    public logdata:any=[];
    logres:any;
    devtype:any;
    constructor(public menuCtrl: MenuController,
        private router: Router,private http: HttpClient,
        public storageService: StorageService,
        public authService:AuthService,
        private platform: Platform
        ) {
        
    }

    async ngOnInit() {
      //this.storageService.clear()
      //this.authService.weburl="http://localhost/charity/api.php?apicall=";
       this.authService.weburl="http://213.42.28.186/charity/api.php?apicall=";
      const hasSeenIntro = await this.storageService.getObject('embraceusr'); 
       if (hasSeenIntro )
        {
          //debugger
            this.storageService.getObject('embraceusr').then((val) => {


                               this.authService.credentials.usrid= val.usrid;
                               this.authService.credentials.username= val.username;
                               this.authService.credentials.email= val.email;
                               this.authService.credentials.usertype=val.usertype;
                               this.authService.credentials.gender=val.gender;
                               


                     
               });
            this.router.navigate(['/home']);
        }

    }
ionViewWillEnter() {
  this.menuCtrl.enable(false);
} 
    login()
  {

      
      if(!this.logdata.username||!this.logdata.password)
      {
        alert('Missing staffid or pincode');
      }else{
        
       let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
 this.http.post(this.authService.weburl+"login",{
                                "username": this.logdata.username ,
                                "password": this.logdata.password,
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.logres=data;

                               alert(this.logres.message);
                               if(this.logres.error==false)
                               {
                                 this.storageService.setObject('embraceusr',  {
                                
                                usrid: this.logres.user.id,
                                username:this.logres.user.username,
                                email: this.logres.user.email,
                                usertype:this.logres.user.usertype,
                                gender:this.logres.user.gender,
                            });
                               this.authService.credentials.usrid= this.logres.user.id;
                               this.authService.credentials.username= this.logres.user.username;
                               this.authService.credentials.email= this.logres.user.email;
                               this.authService.credentials.usertype=this.logres.user.usertype;
                               this.authService.credentials.gender=this.logres.user.gender;
                                //this.authService.weburl="http://localhost/charity/api.php?apicall=";
                               this.authService.weburl="http://213.42.28.186/charity/api.php?apicall=";

                               /*FCM.getToken().then(token => {
        console.log(token);
         this.addDeviceId(token);
      });

      // ionic push notification example
      FCM.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });      

      // refresh the FCM token
      FCM.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
       */
                               this.router.navigate(['/home']);
                             }
                            })
    }
    }  
    addDeviceId(deviceId) {
            //alert("addDeviceId")
           // localStorageService.set('deviceIDembrace', deviceId);
           this.devtype=0;
            if (this.platform.is('android')) {
               this.devtype=1;
            }
            if (this.platform.is('ios')) {
               this.devtype=2;
            }
            

             let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
 this.http.post(this.authService.weburl+"ajsreceiver",{ devtype:this.devtype, myHttpData: deviceId, utype: 2, acnb: this.authService.credentials.usrid }, {headers: headers})
                            .subscribe(data => {
                                //this.logres=data;
                                console.log(data);
                            })
          
        };
  register()
  {
    this.router.navigate(['/register']);
  }

}
