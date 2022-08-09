import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { BoutComponent } from './bout/bout.component';
import { FencerComponent } from './fencer/fencer.component';
import { DoubleTouchComponent } from './double-touch/double-touch.component';
import { ParentTestComponent } from './parent-test/parent-test.component';
import { ChildTestComponent } from './child-test/child-test.component';
import { WeaponSelectComponent } from './weapon-select/weapon-select.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TimerComponent } from "./timer/timer.component";
import { FencerNamesComponent } from './fencer-names/fencer-names.component';
import { FencerScoresComponent } from './fencer-scores/fencer-scores.component';
import { PeriodDisplayComponent } from './period-display/period-display.component';
import { BoutOptionsComponent } from './bout-options/bout-options.component';

@NgModule({
  declarations: [AppComponent, TestComponent, BoutComponent, FencerComponent, DoubleTouchComponent, ParentTestComponent, ChildTestComponent, WeaponSelectComponent, MainMenuComponent, TimerComponent, FencerNamesComponent, FencerScoresComponent, PeriodDisplayComponent, BoutOptionsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
