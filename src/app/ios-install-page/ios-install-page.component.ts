import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppCenterService } from '../app-center.service';
import { ReleaseInfo } from '../model/release.model';

@Component({
  templateUrl: './ios-install-page.component.html',
  styleUrls: ['./ios-install-page.component.scss'],
})
export class IosInstallPageComponent implements OnInit {
  iosReleaseInfo: ReleaseInfo | null = null;

  constructor(private appCenterService: AppCenterService) {}

  ngOnInit(): void {
    this.appCenterService
      .fetchIosReleaseLatest$()
      .pipe(take(1))
      .subscribe((res) => {
        this.iosReleaseInfo = res;
      });
  }
}
