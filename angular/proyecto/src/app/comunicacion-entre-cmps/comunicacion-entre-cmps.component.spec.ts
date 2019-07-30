import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionEntreCmpsComponent } from './comunicacion-entre-cmps.component';

describe('ComunicacionEntreCmpsComponent', () => {
  let component: ComunicacionEntreCmpsComponent;
  let fixture: ComponentFixture<ComunicacionEntreCmpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionEntreCmpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionEntreCmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
