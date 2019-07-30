import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpCurriculumMainComponent } from './cmp-curriculum-main.component';

describe('CmpCurriculumMainComponent', () => {
  let component: CmpCurriculumMainComponent;
  let fixture: ComponentFixture<CmpCurriculumMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpCurriculumMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpCurriculumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
