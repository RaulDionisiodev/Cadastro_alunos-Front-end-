import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';


const routes: Routes = [
  { path: '', component: ListaAlunosComponent },
  { path: 'novo', component: AlunosFormComponent },
  { path: 'detalhes/:id', component: DetalheAlunoComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
