import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraxhoraComponent } from './horaxhora.component';

describe('HoraxhoraComponent', () => {
  let component: HoraxhoraComponent;
  let fixture: ComponentFixture<HoraxhoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraxhoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraxhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
