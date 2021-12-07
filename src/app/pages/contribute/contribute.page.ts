import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AuthService} from '../../shared/auth.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss'],
})
export class ContributePage implements OnInit {
  filterTerm: string;
contributed_item:any=[];
//sanitizedURL:SafeResourceUrl;
  constructor(private http: HttpClient,private router: Router, public authService:AuthService,public domSanitizer: DomSanitizer) { 
  	
  }
   ionViewWillEnter() {


    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  
 this.http.post(this.authService.weburl+'contributer',{
                                "pro":"1"
                             
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.contributed_item=data;
                             //debugger
                              
                              for (let i = 0; i < this.contributed_item.product.length; i++) {
                                this.contributed_item.product[i].showuser={}
                                this.contributed_item.product[i].showuser=JSON.parse(this.contributed_item.product[i].donor_data);
                              }
                              console.log(this.contributed_item.product)
                            })

} 

  ngOnInit() {

  }
  myfilter(data)
  {
if(data=="my")
{
this.filterTerm=this.authService.credentials.username;
}
else{
this.filterTerm="";
}
  }
  donatepage(donate)
  {
    let tabledata={donate:donate}
let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(tabledata)
      }
    };
    this.router.navigate(['donate-details'], navigationExtras);
  }

}
