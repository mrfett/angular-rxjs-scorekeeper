import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

@NgModule({
  declarations: [AppComponent, TestComponent, BoutComponent, FencerComponent, DoubleTouchComponent, ParentTestComponent, ChildTestComponent, WeaponSelectComponent, MainMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
