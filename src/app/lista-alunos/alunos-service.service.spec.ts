import { TestBed, inject } from '@angular/core/testing';

import { AlunosServiceService } from './alunos-service.service';

describe('AlunosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosServiceService]
    });
  });

  it('should be created', inject([AlunosServiceService], (service: AlunosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
