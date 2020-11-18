import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  firstStep = true;
  secondStep = false;

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.firstStep = false;
    this.secondStep = true;
  }
 
  prevStep() {
    this.firstStep = true;
    this.secondStep = false;
  }

}
