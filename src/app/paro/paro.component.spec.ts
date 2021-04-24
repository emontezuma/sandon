import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParoComponent } from './paro.component';

describe('ParoComponent', () => {
  let component: ParoComponent;
  let fixture: ComponentFixture<ParoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
