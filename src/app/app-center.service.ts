import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReleaseInfo } from './model/release.model';

const API_USER_TOKEN = '1c33e3da725219fb7ecde391008b1608a699d206';
const IOS_APP_SECRET = '733e12ee-fa8b-4929-ad99-379079c42d2f';
const ANDROID_APP_SECRET = '5d032d6c-febf-44b1-a0d2-6c328e75f53e';
const APP_CENTER_BASE = 'https://api.appcenter.ms/v0.1/sdk/apps';

@Injectable({
  providedIn: 'root',
})
export class AppCenterService {
  constructor(private http: HttpClient) {}

  fetchAndroidReleaseLatest$(): Observable<ReleaseInfo> {
    return this.http.get<ReleaseInfo>(
      `${APP_CENTER_BASE}/${ANDROID_APP_SECRET}/releases/latest`,
      { headers: { 'X-API-Token': API_USER_TOKEN } }
    );
  }

  fetchIosReleaseLatest$(): Observable<ReleaseInfo> {
    return this.http.get<ReleaseInfo>(
      `${APP_CENTER_BASE}/${IOS_APP_SECRET}/releases/latest`,
      { headers: { 'X-API-Token': API_USER_TOKEN } }
    );
  }
}
