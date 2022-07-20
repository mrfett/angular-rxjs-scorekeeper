import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { BoutComponent } from './bout/bout.component';
import { FencerComponent } from './fencer/fencer.component';

@NgModule({
  declarations: [AppComponent, TestComponent, BoutComponent, FencerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
