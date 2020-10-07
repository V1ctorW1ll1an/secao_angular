import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: '',
  });

  constructor() {}

  get getHeaderData(): HeaderData {
    return this._headerData.value;
  }

  public set setHeaderData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
