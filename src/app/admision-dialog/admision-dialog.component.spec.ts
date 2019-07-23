import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionDialogComponent } from './admision-dialog.component';

describe('AdmisionDialogComponent', () => {
  let component: AdmisionDialogComponent;
  let fixture: ComponentFixture<AdmisionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmisionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
