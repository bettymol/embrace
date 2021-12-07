import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {User, auth} from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import {DatePipe} from '@angular/common';
import {UserModel} from './user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class AuthService {
    user: UserModel = new UserModel();
    isAuthenticated = false;
public results:any=[];
donorimage:SafeResourceUrl="";
 public credentials = {
  usrid:'',
  username:'',
  email:"",
  usertype:"",
  gender:"",
  
} 
public weburl:any;
    constructor(private afAuth: AngularFireAuth,
                private afs: AngularFirestore,
                private datePipe: DatePipe, private http: HttpClient, public domSanitizer: DomSanitizer) {

    }

    public updateUser(user: User, userName?: string): Promise<void> {
        return this.afs.doc(`users/${user.uid}`).set({
            uid: user.uid,
            displayName: userName || user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            registerDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            lastDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')
        });
    }

    signWithAnonymous() {
        return this.afAuth.auth.signInAnonymously()
            .then(credential => {
                return this.updateUser(credential.user);
            });
    }

    signWithEmail(email: string, password: string): Promise<UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUp(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signOut() {
        return this.afAuth.auth.signOut();
    }


    githubLogin() {
        this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
            .then(credential => {
                return this.updateUser(credential.user);
            });
    }

    googleLogin() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .then(credential => {
                return this.updateUser(credential.user);
            });
    }

    twitterLogin() {
        this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider())
            .then(credential => {
                return this.updateUser(credential.user);
            });
    }

    facebookLogin() {
        this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
            .then(credential => {
                return this.updateUser(credential.user);
            });
    }
     getsidemenu()
    {
        this.results=[];
      
       let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
 this.http.post(this.weburl+"menuadd",{
                                "getmenu": 1 ,
                              
                               
                            }, {headers: headers})
                            .subscribe(data => {
                                this.results=data;
                             
                            })   
  
   }
}
