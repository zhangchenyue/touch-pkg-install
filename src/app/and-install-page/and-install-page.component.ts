import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppCenterService } from '../app-center.service';
import { ReleaseInfo } from '../model/release.model';

@Component({
  templateUrl: './and-install-page.component.html',
  styleUrls: ['./and-install-page.component.scss'],
})
export class AndInstallPageComponent implements OnInit {
  andReleaseInfo: ReleaseInfo | null = null;

  constructor(private appCenterService: AppCenterService) {}

  ngOnInit(): void {
    this.appCenterService
      .fetchAndroidReleaseLatest$()
      .pipe(take(1))
      .subscribe((res) => {
        this.andReleaseInfo = res;
      });
  }
}
