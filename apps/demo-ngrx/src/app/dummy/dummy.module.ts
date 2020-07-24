import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDummy from './dummy.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDummy.dummiesFeatureKey, fromDummy.reducer)
  ]
})
export class DummyModule { }
