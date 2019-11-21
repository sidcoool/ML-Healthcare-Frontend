import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DibetesComponent } from './dibetes.component';

describe('DibetesComponent', () => {
  let component: DibetesComponent;
  let fixture: ComponentFixture<DibetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DibetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DibetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
