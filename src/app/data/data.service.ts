import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSubscriptionTypes(): Observable<string[]> {
    return of(["one", "two", "three"]);
  }

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettigs: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/LABWP23Va6nezcHyaaat', userSettigs);
  }
}
