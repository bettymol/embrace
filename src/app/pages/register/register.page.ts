import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../shared/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
public signupdata:any=[];
    signres:any;
  constructor(public menuCtrl: MenuController,
        private router: Router,private http: HttpClient ,public authService:AuthService) { }

  ngOnInit() {
  }
ionViewWillEnter() {
  this.menuCtrl.enable(false);
} 
    register()
  {

      
      if(!this.signupdata.username)
      {
        alert('Missing username');
      }
       if(!this.signupdata.password)
      {
        alert('Missing password');
      }
       if(!this.signupdata.email)
      {
        alert('Missing email');
      }
       else{
        
       let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
 this.http.post(this.authService.weburl+"signup",{
                                "username": this.signupdata.username ,
                                "email": this.signupdata.email,
								"password" :this.signupdata.password,
								"gender" : this.signupdata.gender, 
								"phone" : this.signupdata.phone,
                'address':this.signupdata.address,
								"usertype":this.signupdata.usertype,
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.signres=data;
                               alert(this.signres.message);
                               this.router.navigate(['/login']);
                            })
    }
    }  
}
