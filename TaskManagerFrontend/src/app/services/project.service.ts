import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<any>('/api/projects');
  }

  addProject(projectObj) {
    return this.http.post<any>('/api/project', projectObj, httpOptions);
  }

  editProject(id, projectObj) {
    return this.http.put<any>('/api/project/' + id, projectObj, httpOptions);
  }

  deleteProject(id) {
    return this.http.delete<any>('/api/project/' + id);
  }
}
