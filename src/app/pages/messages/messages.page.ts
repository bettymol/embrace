import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AuthService} from '../../shared/auth.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
filterTerm: string;
messages:any=[];
  constructor(private http: HttpClient,private router: Router, public authService:AuthService,public domSanitizer: DomSanitizer) { }
ionViewWillEnter() {


    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'Send_message',{
                                "getmessage":"1"
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.messages=data;
                             
                            })

} 

  ngOnInit() {
  }

}
