import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveConfig {
  readonly API_KEY = 'AIzaSyC-zfbu77InUdod7hDnf3jxjBdUurmvHlk';
  readonly CLIENT_ID = '617393199519-n7amkggoulm0udbv7jaoauhenqbr1ov3.apps.googleusercontent.com';
  readonly CLIENT_SECRET = 'OyDiFxZqHRvKYmX5nCTxISL0';
  readonly SCOPES = 'https://www.googleapis.com/auth/drive.file';

  readonly CLIENT_ID_ISA_BACKEND = 'mobileAppClientId';
  readonly CLIENT_SECRET_ISA_BACKEND = 'xYQLdfFLoc6aBkwK';

}
