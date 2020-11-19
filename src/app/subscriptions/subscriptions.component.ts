import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  firstStep = true;
  secondStep = false;
  thirdStep = false;
  fourthStep = false;
  yourDomain = '.simplyturn.com'

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

  prevThird() {
    this.secondStep = true;
    this.thirdStep = false;
  }

  prevFourth() {
    this.thirdStep = true;
    this.fourthStep = false;
  }

  thirdFormStep() {
    this.secondStep = false;
    this.thirdStep = true;
  }

  fourthFormStep() {
    this.fourthStep = true;
    this.thirdStep = false;
  }

  domainOptions = true;
  changeDomainOptions(e) {
    console.log('e', e.target.value);
    this.domainOptions = !this.domainOptions;
  }


  addDomainPrefix(e) {
    this.yourDomain = '.simplyturn.com'
    this.yourDomain = e + this.yourDomain;
  }

}
