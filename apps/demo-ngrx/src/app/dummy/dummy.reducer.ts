import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Dummy } from './dummy.model';
import * as DummyActions from './dummy.actions';

export const dummiesFeatureKey = 'dummies';

export interface State extends EntityState<Dummy> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Dummy> = createEntityAdapter<Dummy>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(DummyActions.addDummy,
    (state, action) => adapter.addOne(action.dummy, state)
  ),
  on(DummyActions.upsertDummy,
    (state, action) => adapter.upsertOne(action.dummy, state)
  ),
  on(DummyActions.addDummys,
    (state, action) => adapter.addMany(action.dummys, state)
  ),
  on(DummyActions.upsertDummys,
    (state, action) => adapter.upsertMany(action.dummys, state)
  ),
  on(DummyActions.updateDummy,
    (state, action) => adapter.updateOne(action.dummy, state)
  ),
  on(DummyActions.updateDummys,
    (state, action) => adapter.updateMany(action.dummys, state)
  ),
  on(DummyActions.deleteDummy,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DummyActions.deleteDummys,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DummyActions.loadDummys,
    (state, action) => adapter.setAll(action.dummys, state)
  ),
  on(DummyActions.clearDummys,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
