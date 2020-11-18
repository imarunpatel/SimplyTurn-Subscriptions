import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  isPageError: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }


  sendErrorStatus(status: boolean) {
    this.isPageError.next(status);
  }

  getErrorPageStatus():Observable<any> {
    return this.isPageError.asObservable();
  }
}
