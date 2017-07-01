/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpinningRodComponent } from './spinning-rod.component';

describe('SpinningRodComponent', () => {
  let component: SpinningRodComponent;
  let fixture: ComponentFixture<SpinningRodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningRodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningRodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
