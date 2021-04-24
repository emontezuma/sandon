import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeslotesComponent } from './geslotes.component';

describe('GeslotesComponent', () => {
  let component: GeslotesComponent;
  let fixture: ComponentFixture<GeslotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeslotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeslotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
