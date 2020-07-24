import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DummyEffects } from './dummy.effects';

describe('DummyEffects', () => {
  let actions$: Observable<any>;
  let effects: DummyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DummyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DummyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
