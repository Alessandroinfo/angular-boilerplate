import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalDataService} from './global-data.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // THIS CREATE HEADER FOR CENTER AND TOP CONST THAT HAVE EACH STRING FOR SET LOADING
  center = {
    headers: new HttpHeaders().set(
      this.gldSvc.loadingHeaders.CENTERLOADER,
      this.gldSvc.loadingHeaders.CENTERLOADER
    )
  };
  top = {
    headers: new HttpHeaders().set(
      this.gldSvc.loadingHeaders.TOPLOADER,
      this.gldSvc.loadingHeaders.TOPLOADER
    )
  };

  // THIS CONTAIN BOTH LOADING TYPE
  // Use this if you don't have other headers
  loaderOptions = {top: this.top, center: this.center};

  // TODO MANAGE ERRORS OF HTTP
  constructor(private http: HttpClient, private gldSvc: GlobalDataService) {
  }

  getInfo() {
    return this.http
      .get(
        'https://jsonplaceholder.typicode.com/posts',
        {...this.loaderOptions.top, observe: 'response'}
      )
      .pipe(delay(14000));
  }

  // This show how to add custom headers
  // getInfo() {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('custom_key', 'custom_value');
  //   headers = headers.set(this.gldSvc.loadingHeaders.TOPLOADER, this.gldSvc.loadingHeaders.TOPLOADER);
  //
  //   return this.http.get(
  //     'http://slowwly.robertomurray.co.uk/delay/10000/url/http://www.google.co.uk',
  //     {headers, observe: 'response'});
  // }
}
