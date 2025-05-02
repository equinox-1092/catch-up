import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IpLocationResource } from '../../core/patterns/ip-location-resource';
import { IpLocationAssembler } from '../../core/patterns/ip-location-assembler';
import { IpLocation } from '../model/ip-location/ip-location.model';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class IpLocationService {
  private baseUrl = 'http://api.ipstack.com/';
  private accessKey = 'fbfd25024feb8064c7f9ea012cebdc7a';

  constructor(private api: ApiService) {}

  lookup(ip: string): Observable<IpLocation> {
    const url = `${this.baseUrl}/${ip}?access_key=${this.accessKey}`;
    return this.api.get<IpLocationResource>(url)
      .pipe(
        map((res: IpLocationResource) => IpLocationAssembler.fromResource(res))
      );
  }
}
