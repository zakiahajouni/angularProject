import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMotorsComponent } from './update-motors.component';

describe('UpdateMotorsComponent', () => {
  let component: UpdateMotorsComponent;
  let fixture: ComponentFixture<UpdateMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
