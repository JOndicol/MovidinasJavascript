import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpLeiaComponent } from './cmp-leia.component';

describe('CmpLeiaComponent', () => {
  let component: CmpLeiaComponent;
  let fixture: ComponentFixture<CmpLeiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpLeiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpLeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
