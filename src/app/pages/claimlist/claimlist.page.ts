import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import {AuthService} from '../../shared/auth.service';
@Component({
  selector: 'app-claimlist',
  templateUrl: './claimlist.page.html',
  styleUrls: ['./claimlist.page.scss'],
})
export class ClaimlistPage implements OnInit {

 
filterTerm: string;
  claimed_item:any=[];
  constructor(private http: HttpClient,private router: Router,public authService:AuthService) { 
  	
  }
   ionViewWillEnter() {

    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'receiver',{
                                "pro":"1"
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.claimed_item=data;
                              
                              for (let i = 0; i < this.claimed_item.product.length; i++) {
                                this.claimed_item.product[i].showuser={}
                                this.claimed_item.product[i].showuser=JSON.parse(this.claimed_item.product[i].reciever_data);
                              }
                            })
} 

  ngOnInit() {

  }

claimpage(clm)
  {
    let tabledata={clm:clm}
let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tabledata)
      }
    };
    this.router.navigate(['claim-details'], navigationExtras);
  }
  doneclaim(id)
  {
    if(confirm("do you want to continue ?")) {
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'receiver',{
                                "recievedclaim":"1",
                                "id":id,
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.claimed_item=data;
                               let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'receiver',{
                                "pro":"1"
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.claimed_item=data;
                              
                              for (let i = 0; i < this.claimed_item.product.length; i++) {
                                this.claimed_item.product[i].showuser={}
                                this.claimed_item.product[i].showuser=JSON.parse(this.claimed_item.product[i].reciever_data);
                              }
                            })
                              
                            })
                          }
  }
}

