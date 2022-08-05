import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-fencer-names',
  templateUrl: './fencer-names.component.html',
  styleUrls: ['./fencer-names.component.scss']
})
export class FencerNamesComponent implements OnInit {

  @Input() fencerNames: string[] = ["Fencer A", "Fencer B"];

  constructor() { }

  ngOnInit(): void {
  }

}
