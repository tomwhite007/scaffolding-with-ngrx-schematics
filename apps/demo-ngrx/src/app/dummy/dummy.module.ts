import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDummy from './dummy.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DummyEffects } from './dummy.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDummy.dummiesFeatureKey, fromDummy.reducer),
    EffectsModule.forFeature([DummyEffects])
  ]
})
export class DummyModule { }
