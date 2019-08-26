import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Repositories } from './repositories';
import { GitFormComponent } from './git-form/git-form.component'
import { User } from './user';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTwoService {
  repos:Repositories;
  searchTerm:GitFormComponent;
  searchReposities(searchTerm:string){
 interface najiskia{
  name:string;
  html_url:any;
  created_at:string;
  forks_count:number;
 }
    let searchRepoUrl = "https://api.github.com/users/"+ searchTerm+ "/repos?";
    let token ="?access_token=ec0138b704da9fc2c4cf42095b7975ff59d1a525";
    let searchRepoEndPoint= searchRepoUrl +token;
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<najiskia>(searchRepoEndPoint).toPromise().then(
        (results)=>{
          this.repos= results;
          resolve();
        },
        (error)=>{
          console.log(error);
          reject()
        }
      )
    })
    return promise;
  }
  constructor(public http:HttpClient) { }
}
