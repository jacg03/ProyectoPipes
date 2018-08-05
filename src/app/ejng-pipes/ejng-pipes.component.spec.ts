import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngPipesComponent } from './ejng-pipes.component';

describe('EjngPipesComponent', () => {
  let component: EjngPipesComponent;
  let fixture: ComponentFixture<EjngPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
