import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDialogBoxComponent } from './select-dialog-box.component';

describe('SelectDialogBoxComponent', () => {
  let component: SelectDialogBoxComponent;
  let fixture: ComponentFixture<SelectDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
