import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DummyModule } from './dummy/dummy.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DummyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
