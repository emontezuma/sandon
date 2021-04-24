import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrorechazoComponent } from './filtrorechazo.component';

describe('FiltrorechazoComponent', () => {
  let component: FiltrorechazoComponent;
  let fixture: ComponentFixture<FiltrorechazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrorechazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrorechazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
