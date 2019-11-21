import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHealthComponent } from './track-health.component';

describe('TrackHealthComponent', () => {
  let component: TrackHealthComponent;
  let fixture: ComponentFixture<TrackHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
