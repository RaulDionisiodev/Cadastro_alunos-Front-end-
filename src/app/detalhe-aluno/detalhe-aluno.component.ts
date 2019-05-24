import { Alunos } from './../lista-alunos/Alunos';
import { AlunosServiceService } from './../lista-alunos/alunos-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.css'],
  providers: [AlunosServiceService]
})



export class DetalheAlunoComponent implements OnInit {

  aluno: Alunos[];
  id: number;

  constructor(private route: ActivatedRoute, private service: AlunosServiceService) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {

    this.service.list_details(this.id).subscribe(dados => this.aluno = dados);

  }


}
