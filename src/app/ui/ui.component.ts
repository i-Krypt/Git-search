import { Component, OnInit } from '@angular/core';
import { ServiceOneService  } from '../serviceOne.service';
import {ServiceTwoService  } from '../serviceTwo';


import { User } from '../user';
import { Repositories  } from '../repositories';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  users:User[]=[];
  reposy:Repositories;
  searchThis(searchTerm){
    this.serviceOne.searchUsers(searchTerm).then(
      ()=>{
        this.users = this.serviceOne.users;
      },
      (error)=>{
        console.log(error)
      }
    )
    this.serviceTwo.searchReposities(searchTerm).then(
      (success)=>{
        this.reposy = this.serviceTwo.repos;
        console.log(this.reposy);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  searchRepos(searchTerm){
  }


  constructor(public serviceOne:ServiceOneService, public serviceTwo:ServiceTwoService) { }

  ngOnInit() {
    this.searchThis('i-Krypt')
  }

}
