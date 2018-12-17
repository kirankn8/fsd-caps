import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('http://localhost:3000/api/users');
  }

  addUser(userObj) {
    return this.http.post<any>('http://localhost:3000/api/user', userObj, httpOptions);
  }

  editUser(id, userObj) {
    return this.http.put<any>('http://localhost:3000/api/user/' + id, userObj, httpOptions);
  }

  deleteUser(id) {
    return this.http.delete<any>('http://localhost:3000/api/user/' + id);
  }
}
