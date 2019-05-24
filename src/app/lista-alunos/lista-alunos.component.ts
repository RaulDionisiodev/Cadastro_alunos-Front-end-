import { Alunos } from './Alunos';
import { AlunosServiceService } from './alunos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  alunos: Alunos[];

  constructor(private service: AlunosServiceService) { }

  ngOnInit() {

    this.service.list().subscribe(dados => this.alunos = dados);
  }

}
