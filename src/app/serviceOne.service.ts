import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

users:User[]=[];
 constructor(public http:HttpClient) { }
 searchUsers(searchTerm:string){
   let searchEndPoint = "https://api.github.com/users/"+searchTerm+"?access_token=ec0138b704da9fc2c4cf42095b7975ff59d1a525";
   let promise = new Promise((resolve,reject)=>{
     this.http.get(searchEndPoint).toPromise().then(
       (results)=>{
         let name:any = results;
          this.users=[];
         this.users.push(name);
         console.log(this.users);
         resolve()
       },
       (error)=>{
         console.log(error);
         reject()
       }
     )
   })
   return promise;
 }
}
