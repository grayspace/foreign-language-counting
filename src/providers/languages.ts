import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Language } from '../models/language';

@Injectable()
export class Languages {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/language', params)
      .map(resp => resp.json());
  }

}
