import { Component, OnInit } from '@angular/core';
//import {fa} from '@fortawesome/angular-fontawesome'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeTab=1;
  public rightActiveTab=0;
  public selectForm=false;
  public profileStatus=false;
  public accountStatus=false;
  constructor() { }

  ngOnInit(): void {
  }
  active(index: number): void {
    this.activeTab = index;
    this.profileStatus=false;
    this.rightActiveTab=0;
    this.accountStatus=false;
  }
  rightNavActive(index: number): void {
    console.log(index);
    this.rightActiveTab = this.rightActiveTab === index ? 0 : index;

    if(index===5){
      this.accountStatus=!this.accountStatus;
    }
    else{
      this.accountStatus=false;
    }
  }
  selectClass(){
    this.selectForm=!this.selectForm;
  }
  activeProfile(){
    this.profileStatus=true;
  }
  accountToggle(){
    this.accountStatus=!this.accountStatus;
  }

}
