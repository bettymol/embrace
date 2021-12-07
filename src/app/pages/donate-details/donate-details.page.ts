import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertProvider, LoadingProvider} from '../../shared/providers';
import {AuthService} from '../../shared/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {StorageService} from '../../storage.service';
 import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

 @Component({
  selector: 'app-donate-details',
  templateUrl: './donate-details.page.html',
  styleUrls: ['./donate-details.page.scss'],
})
export class DonateDetailsPage implements OnInit {
donatedata:any=[];
product:any=[];
productsub:any;
imageurl:any;
cat:any;
imageurlsend:SafeResourceUrl;
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient, private loadingProvider: LoadingProvider,public domSanitizer: DomSanitizer,
         public storageService:StorageService,public authService:AuthService,private camera: Camera) { 
  	this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.donatedata = JSON.parse(params.special);
        console.log(this.donatedata)
      }
     });}
ionViewWillEnter() {

    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'product_category',{
                                "pro":"1"
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.product=data;
                              
                              
                            })
                            this.donatedata.donate.is=JSON.parse(this.donatedata.donate.donor_data);
                            //alert(this.donatedata.donate.show_donor)
                           
                            this.onChange(this.donatedata.donate.category);
                            debugger
                         this.cat=true;
                            //alert(this.donatedata.donate.category)
                           // alert(this.donatedata.donate.show_donor)
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
    this.donatedata.donate.is={};
    //this.donatedata.donate.donor_data={}
  }
  takepic()
{
   const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
}
        this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):

 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.imageurl = base64Image;
 this.imageurlsend=imageData;
  this.storageService.setObject('donorimagestor', {
                                donorimagestor: this.imageurlsend
                                
                            });
 this.authService.donorimage=this.imageurlsend;
 

}, (err) => {
 // Handle error
});
    
}
donordata(check)
{
  if(check=="yes")
  {
  this.donatedata.donate.show_donor=1;
}
else
{
  this.donatedata.donate.show_donor=0;
}
}
  async oncontributeSubmit(isactive)
{
  //alert(this.imageurl)
//debugger
       // alert(this.authService.credentials.galleryurl)
        
  if(this.donatedata.donate.mproduct==0||this.donatedata.donate.subproduct==0)
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
  
 this.http.post(this.authService.weburl+'contributer',{
 "category" : this.donatedata.donate.category,
 "subcategory" :this.donatedata.donate.subcategory,
 "Description" :this.donatedata.donate.Description, 
 "Quantity":this.donatedata.donate.Quantity,
 "show_donor" :this.donatedata.donate.show_donor,
 "Status" :this.donatedata.donate.Status,
 "Note" :this.donatedata.donate.Note, 
  "donor_data" :JSON.stringify(this.donatedata.donate.is),
 "donor_id":this.authService.credentials.usrid,
 "IsActive" :isactive,
 "Picture" :this.imageurl,
 "id" :this.donatedata.donate.pid,
 "fun":"update",

                             
}, {headers: headers})
                            .subscribe(data => {
                                this.productsub=data;
                              
                              
loader.dismiss()
  });
}
}

}
