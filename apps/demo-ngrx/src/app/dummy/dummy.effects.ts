import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DummyActions from './dummy.actions';



@Injectable()
export class DummyEffects {

  loadDummys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(DummyActions.loadDummys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DummyActions.loadDummysSuccess({ data })),
          catchError(error => of(DummyActions.loadDummysFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
