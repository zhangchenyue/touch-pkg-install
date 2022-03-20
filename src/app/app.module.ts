import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AndInstallPageComponent } from './and-install-page/and-install-page.component';
import { IosInstallPageComponent } from './ios-install-page/ios-install-page.component';
import { InstallViewComponent } from './install-view/install-view.component';
import { UrlSafePipe } from './url-safe.pipe';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InstallViewComponent,
    AndInstallPageComponent,
    IosInstallPageComponent,
    UrlSafePipe,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'install/ios', component: IosInstallPageComponent },
        { path: 'install/android', component: AndInstallPageComponent },
      ],
      { useHash: true }
    ),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
