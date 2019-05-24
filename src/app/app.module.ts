import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlunosComponent,
    AlunosFormComponent,
    DetalheAlunoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
