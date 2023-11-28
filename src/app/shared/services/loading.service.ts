import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loadActive = new Subject<boolean>();

  constructor() {}

  openLoading() {
    this._loadActive.next(true);
  }

  closeLoading() {
    this._loadActive.next(false);
  }

  listenLoading() {
    return this._loadActive.asObservable();
  }
}
