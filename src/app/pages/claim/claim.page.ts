import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AlertProvider, LoadingProvider} from '../../shared/providers';
import {AuthService} from '../../shared/auth.service';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.page.html',
  styleUrls: ['./claim.page.scss'],
})
export class ClaimPage implements OnInit {
product:any=[];
productsub:any;
rcvr:any;
show_reciever:any;
  constructor(private http: HttpClient,private router: Router, private loadingProvider: LoadingProvider,public authService:AuthService) { }

  ngOnInit() {
  	this.product=[];
    this.rcvr=[];
  	this.productsub=[];
    this.rcvr.category="0";
    this.rcvr.subcategory="0";
    this.rcvr.IsActive="1"
    this.show_reciever=0;
    this.rcvr.is={};
    this.rcvr.is.Email=false;
    this.rcvr.is.Name=false;
    this.rcvr.is.Address=false;
    this.rcvr.is.Phone=false;
  }
ionViewWillEnter() {

    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'product_category',{
                                "pro":"1"
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.product=data;
                              
                              
                            })
} 
async onChange($event)
{
	const loader = await this.loadingProvider.create();
        await loader.present();
	//alert($event.target.value);
	$event.target.value
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'product_category',{
                                "prosub":"1",
                                "pid":$event.target.value
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.productsub=data;
                              
                              
loader.dismiss()
  });
}
recieverdata(check)
{
  if(check=="yes")
  {
  this.show_reciever=1;
}
else
{
  this.show_reciever=0;
}
}
async onclaimSubmit(isactive)
{
  if(this.rcvr.mproduct==0||this.rcvr.subproduct==0)
  {
    alert("Select Category")
  }
  else{
  const loader = await this.loadingProvider.create();
        await loader.present();
  //alert($event.target.value);
  
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'receiver',{
"insert":1,
"category" : this.rcvr.category,
 "subcategory" :this.rcvr.subcategory,
 "Description" :this.rcvr.Description, 
 "Quantity":this.rcvr.Quantity,
 "Note" :this.rcvr.Note,
 "Reciever_id" :this.authService.credentials.usrid,
 "show_reciever" :this.show_reciever,
 "reciever_data" :JSON.stringify(this.rcvr.is),
 "IsActive" :isactive,
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.productsub=data;
                                this.router.navigate(['/claimlist']);
                              
                              
loader.dismiss()
  });
}
}
}
