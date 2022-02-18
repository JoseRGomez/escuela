import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthouseComponent } from './selecthouse.component';

describe('SelecthouseComponent', () => {
  let component: SelecthouseComponent;
  let fixture: ComponentFixture<SelecthouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecthouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
