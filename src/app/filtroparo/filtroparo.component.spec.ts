import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroparoComponent } from './filtroparo.component';

describe('FiltroparoComponent', () => {
  let component: FiltroparoComponent;
  let fixture: ComponentFixture<FiltroparoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroparoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroparoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
