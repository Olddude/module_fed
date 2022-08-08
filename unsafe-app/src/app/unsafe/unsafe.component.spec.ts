import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsafeComponent } from './unsafe.component';

describe('UnsafeComponent', () => {
  let component: UnsafeComponent;
  let fixture: ComponentFixture<UnsafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
