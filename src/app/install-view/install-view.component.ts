import { Component, Input, OnInit } from '@angular/core';
import { ReleaseInfo } from '../model/release.model';

@Component({
  selector: 'install-view',
  templateUrl: './install-view.component.html',
  styleUrls: ['./install-view.component.scss'],
})
export class InstallViewComponent implements OnInit {
  @Input() releaseInfo: ReleaseInfo | null = null;
  @Input() platform: 'ios' | 'android' | undefined;

  ngOnInit(): void {}
}
