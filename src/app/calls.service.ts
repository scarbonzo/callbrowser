import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallsService {
  private _url = 'http://hdcalls.api.dev.lsnj.org/api/v1/';

  constructor(private _http: Http) {}

  getReport(start: Date, end: Date) {
    return this._http
      .get(this._url + 'report?start=' + start + '&end=' + end)
      .pipe(map((_response: Response) => _response.json()));
  }
}
