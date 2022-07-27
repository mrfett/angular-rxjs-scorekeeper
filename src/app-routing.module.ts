import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from "./app/main-menu/main-menu.component";
import { BoutComponent } from './app/bout/bout.component';

const routes = [
  { path: '', component: MainMenuComponent },
  { path: 'bout', component: BoutComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
