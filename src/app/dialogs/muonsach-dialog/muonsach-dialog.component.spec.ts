import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuonsachDialogComponent } from './muonsach-dialog.component';

describe('MuonsachDialogComponent', () => {
  let component: MuonsachDialogComponent;
  let fixture: ComponentFixture<MuonsachDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuonsachDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuonsachDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
