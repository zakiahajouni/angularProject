import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParNameComponent } from './recherche-par-name.component';

describe('RechercheParNameComponent', () => {
  let component: RechercheParNameComponent;
  let fixture: ComponentFixture<RechercheParNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
