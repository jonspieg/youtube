/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WavePendulumComponent } from './wave-pendulum.component';

describe('WavePendulumComponent', () => {
  let component: WavePendulumComponent;
  let fixture: ComponentFixture<WavePendulumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavePendulumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavePendulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
