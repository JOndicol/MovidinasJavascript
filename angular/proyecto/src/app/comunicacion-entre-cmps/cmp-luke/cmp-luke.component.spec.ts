import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpLukeComponent } from './cmp-luke.component';

describe('CmpLukeComponent', () => {
  let component: CmpLukeComponent;
  let fixture: ComponentFixture<CmpLukeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpLukeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpLukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
