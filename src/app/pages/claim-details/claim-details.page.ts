import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {AlertProvider, LoadingProvider} from '../../shared/providers';
 import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.page.html',
  styleUrls: ['./claim-details.page.scss'],
})
export class ClaimDetailsPage implements OnInit {
claimdata:any=[];
product:any=[];
productsub:any;
cat:any;
  constructor( private http: HttpClient, private loadingProvider: LoadingProvider,public authService:AuthService,private route: ActivatedRoute, private router: Router) {
  	this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.claimdata = JSON.parse(params.special);
        console.log(this.claimdata)
      }
     });
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
                            this.claimdata.clm.is=JSON.parse(this.claimdata.clm.reciever_data);
                            //alert(this.claimdata.clm.show_donor)
                           
                            this.onChange(this.claimdata.clm.category);
                            debugger
                         this.cat=true;
                            //alert(this.claimdata.clm.category)
                           // alert(this.claimdata.clm.show_donor)
} 
async onChange(value)
{
this.cat=false;
  const loader = await this.loadingProvider.create();
        await loader.present();
  //alert($event.target.value);
 
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'product_category',{
                                "prosub":"1",
                                "pid":value
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.productsub=data;
                              
                              
loader.dismiss()
  });
}

  ngOnInit() {
    this.product=[];
    
    this.productsub=[];
    this.claimdata.clm.is={};
    //this.claimdata.clm.donor_data={}
  }

recieverdata(check)
{
  if(check=="yes")
  {
  this.claimdata.clm.show_reciever=1;
}
else
{
  this.claimdata.clm.show_reciever=0;
}
}
  async onclaimSubmit(isactive)
{
  //alert(this.imageurl)
//debugger
       // alert(this.authService.credentials.galleryurl)
        
  if(this.claimdata.clm.mproduct==0||this.claimdata.clm.subproduct==0)
  {
    alert("Select Category")
  }
  else{
  const loader = await this.loadingProvider.create();
        await loader.present();
  //alert($event.target.value);
  //debugger
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
 //debugger 
 this.http.post(this.authService.weburl+'receiver',{
 "category" : this.claimdata.clm.category,
 "subcategory" :this.claimdata.clm.subcategory,
 "Description" :this.claimdata.clm.Description, 
 "Quantity":this.claimdata.clm.Quantity,
 "show_reciever" :this.claimdata.clm.show_reciever,
 "Status" :this.claimdata.clm.Status,
 "Note" :this.claimdata.clm.Note, 
  "reciever_data" :JSON.stringify(this.claimdata.clm.is),
 "Reciever_id":this.authService.credentials.usrid,
 "IsActive" :isactive,
 
 "id" :this.claimdata.clm.rid,
 "fun":"update",

                             
}, {headers: headers})
                            .subscribe(data => {
                                this.productsub=data;
                              
                              
loader.dismiss()
  });
}
}

}
