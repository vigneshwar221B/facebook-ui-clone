import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  years = [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995];
  selectedGender = '';
  toggleModel:boolean=false;
  constructor(public dialog: MatDialog) {

   }

  ngOnInit(): void {
  }
  radioChangeHandler(event: any){
    this.selectedGender = event.target.value;
  }
  openModel(){

    // let createModel = document.getElementById('createModal');
    // if(createModel)
    // {
    //   createModel.classList.add('show');
    //   createModel.style.display='block';
    //   createModel.style.opacity='1';
    //   let bodyElement = document.querySelector(".body");//getElementsByClassName('body')[0];
    //   console.log(bodyElement);
    //  // if(bodyElement)
    //     //bodyElement.style.opacity='0.5';//.classList.add('modal-open');
    // }
    //  console.log("I'm in - " +createModel);
    // this.toggleModel=!this.toggleModel;
    this.dialog.open(ModalComponent, {
      width: '500px',
      height: '70vh'
    });

  }
}
