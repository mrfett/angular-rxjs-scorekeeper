import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-bout-options',
  templateUrl: './bout-options.component.html',
  styleUrls: ['./bout-options.component.scss']
})
export class BoutOptionsComponent implements OnInit {

  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu = () => {
    this.menuOpen ? this.menuOpen = false: this.menuOpen = true;
  }

}
