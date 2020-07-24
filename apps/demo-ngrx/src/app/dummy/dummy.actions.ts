import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Dummy } from './dummy.model';

export const loadDummys = createAction(
  '[Dummy/API] Load Dummys', 
  props<{ dummys: Dummy[] }>()
);

export const addDummy = createAction(
  '[Dummy/API] Add Dummy',
  props<{ dummy: Dummy }>()
);

export const upsertDummy = createAction(
  '[Dummy/API] Upsert Dummy',
  props<{ dummy: Dummy }>()
);

export const addDummys = createAction(
  '[Dummy/API] Add Dummys',
  props<{ dummys: Dummy[] }>()
);

export const upsertDummys = createAction(
  '[Dummy/API] Upsert Dummys',
  props<{ dummys: Dummy[] }>()
);

export const updateDummy = createAction(
  '[Dummy/API] Update Dummy',
  props<{ dummy: Update<Dummy> }>()
);

export const updateDummys = createAction(
  '[Dummy/API] Update Dummys',
  props<{ dummys: Update<Dummy>[] }>()
);

export const deleteDummy = createAction(
  '[Dummy/API] Delete Dummy',
  props<{ id: string }>()
);

export const deleteDummys = createAction(
  '[Dummy/API] Delete Dummys',
  props<{ ids: string[] }>()
);

export const clearDummys = createAction(
  '[Dummy/API] Clear Dummys'
);
