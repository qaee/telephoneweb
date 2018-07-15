import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  _url = 'http://localhost:8080/contacts';
  constructor(private httpClient: HttpClient) { }

  public getContacts(): Observable<Contact> {
    return this.httpClient.get<Contact>(this._url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
export interface Contact {
  _embedded: Embedded;
  _links: Links;
}
export interface Embedded {
  contacts?: (ContactsEntity)[] | null;
}
export interface ContactsEntity {
  id?: number;
  name: string;
  address: string;
  email: string;
  contactNumber?: (ContactNumberEntity)[] | null;
  _links?: Links1;
}
export interface ContactNumberEntity {
  telephoneNumber: string;
}
export interface Links1 {
  self: SelfOrContactOrProfile;
  contact: SelfOrContactOrProfile;
}
export interface SelfOrContactOrProfile {
  href: string;
}
export interface Links {
  self: SelfOrContactOrProfile;
  profile: SelfOrContactOrProfile;
}
