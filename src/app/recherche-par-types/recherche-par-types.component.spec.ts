import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParTypesComponent } from './recherche-par-types.component';

describe('RechercheParTypesComponent', () => {
  let component: RechercheParTypesComponent;
  let fixture: ComponentFixture<RechercheParTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
