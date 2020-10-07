import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  public get getTitle(): string {
    return this.headerService.getHeaderData.title;
  }

  public get getIcon(): string {
    return this.headerService.getHeaderData.icon;
  }

  public get getRouteUrl(): string {
    return this.headerService.getHeaderData.routeUrl;
  }
}
