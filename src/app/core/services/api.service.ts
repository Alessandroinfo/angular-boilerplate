import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalDataService} from './global-data.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // THIS CREATE HEADER FOR CENTER AND TOP CONST THAT HAVE EACH STRING FOR SET LOADING
  center = {headers: new HttpHeaders().set(this.gldSvc.loadingHeaders.CENTERLOADER, this.gldSvc.loadingHeaders.CENTERLOADER)};
  top = {headers: new HttpHeaders().set(this.gldSvc.loadingHeaders.TOPLOADER, this.gldSvc.loadingHeaders.TOPLOADER)};

  // THIS CONTAIN BOTH LOADING TYPE
  loaderOptions = {top: this.top, center: this.center};

  // TODO MANAGE ERRORS OF HTTP
  constructor(
    private http: HttpClient,
    private gldSvc: GlobalDataService
  ) {
  }

  getInfo() {
    return this.http.get(
      'http://slowwly.robertomurray.co.uk/delay/10000/url/http://www.google.co.uk',
      {...this.loaderOptions.top, observe: 'response'});
  }
}
