import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myName = 'Lucky Boy';
  Age;
  myAge;
  onChecked;
  Address;
  min = 0;
  sec = 0;
  checked = 5;
  actived = 0;
  tests = [
    {
      title: 'This is checkbox 01', name: 'check01', stt: false
    },
    {
      title: 'This is checkbox 02', name: 'check02', stt: false
    },
    {
      title: 'This is checkbox 03', name: 'check03', stt: false
    },
    {
      title: 'This is checkbox 04', name: 'check04', stt: false
    },
    {
      title: 'This is checkbox 05', name: 'check05', stt: false
    }
  ]
  Add() {
    this.Age = this.myAge;
  }
  myAddress(value) {
    this.Address = value;
  }
  ngOnInit() {
    setInterval(() => {
      this.sec++;
      if (this.sec >= 60) {
        this.min++;
        this.sec = this.sec - 60;
      }
    }, 1000);
  }
  onChange(value) {
    this.onChecked = value;
  }
  handleChecked(value) {
    console.log(value);
  }
  constructor(public routerService: Router) {}
  changePage(url) {
    // this.routerService.navigate([url]);
    // or
    this.routerService.navigateByUrl(url);
  }
}
