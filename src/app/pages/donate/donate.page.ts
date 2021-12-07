import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AlertProvider, LoadingProvider} from '../../shared/providers';
import {AuthService} from '../../shared/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {StorageService} from '../../storage.service';
 import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
product:any=[];
productsub:any;
contr:any;

imageurl:any;
donordatashow:any;
imageurlsend:SafeResourceUrl;
  constructor(private http: HttpClient, private loadingProvider: LoadingProvider,public domSanitizer: DomSanitizer,
         public storageService:StorageService,public authService:AuthService,private camera: Camera,private router: Router) { }

  ngOnInit() {
  	this.product=[];
    this.contr=[];
  	this.productsub=[];
    this.contr.category="0";
    this.contr.subcategory="0";
    this.contr.IsActive="1"
    this.donordatashow=0;
    this.contr.is={};
    this.contr.is.Email=false;
    this.contr.is.Name=false;
    this.contr.is.Address=false;
    this.contr.is.Phone=false;

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
  this.donordatashow=1;
}
else
{
  this.donordatashow=0;
}
}
async oncontributeSubmit(isactive)
{
//debugger
       // alert(this.authService.credentials.galleryurl)
        
  if(this.contr.mproduct==0||this.contr.subproduct==0)
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
                               "category" : this.contr.category,
 "subcategory" :this.contr.subcategory,
 "Description" :this.contr.Description, 
 "Quantity":this.contr.Quantity,
 "show_donor" :this.donordatashow,
 "Status" :this.contr.Status,
 "Note" :this.contr.Note, 
  "donor_data" :JSON.stringify(this.contr.is),
 "donor_id":this.authService.credentials.usrid,
 "IsActive" :isactive,
 "Picture" :this.imageurl,

                             
}, {headers: headers})
                            .subscribe(data => {
                                this.productsub=data;
                                 this.router.navigate(['/contribute']);
                              
                              
loader.dismiss()
  });
}
}
}
