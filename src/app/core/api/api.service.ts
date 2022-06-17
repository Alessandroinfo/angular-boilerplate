import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalDataService} from '../global-data/global-data.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // THIS CREATE HEADER FOR CENTER AND TOP CONST THAT HAVE EACH STRING FOR SET LOADING
  center = {
    headers: new HttpHeaders().set(
      this.gldSvc.loadingHeaders.centerLoader,
      this.gldSvc.loadingHeaders.centerLoader
    ),
  };
  top = {
    headers: new HttpHeaders().set(
      this.gldSvc.loadingHeaders.topLoader,
      this.gldSvc.loadingHeaders.topLoader
    ),
  };

  // This contain both loading type
  // Use this if you don't have other headers
  loaderOptions = {top: this.top, center: this.center};

  // TODO: Manage errors of http
  constructor(private http: HttpClient, private gldSvc: GlobalDataService) {}

  // Use this site for every http response
  // https://mock.codes/
  getInfo() {
    return this.http
      .get('https://mock.codes/400', {
        ...this.loaderOptions.top,
        observe: 'response',
      })
      .pipe(delay(5000));
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
