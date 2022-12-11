import { TestBed } from '@angular/core/testing';

import { MotorGuard } from './motor.guard';

describe('MotorGuard', () => {
  let guard: MotorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MotorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
