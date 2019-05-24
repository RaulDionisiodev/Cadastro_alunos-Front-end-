import { Alunos } from './Alunos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  private readonly API = 'http://127.0.0.1:8000/api/v1/alunos/';

  constructor(private http: HttpClient) { }

  list() {

    return this.http.get<Alunos[]>(this.API);
  }

  list_details(id: number) {

    return this.http.get<Alunos[]>(this.API + id);

  }


}
