import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from '../model/user.dto';

const serviceUrl = environment.serverUrl + 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }


  public getAllUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(serviceUrl) ;
  }


  public getUserById(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(serviceUrl + '/' + id) ;
  }

}
