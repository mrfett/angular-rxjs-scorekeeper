import { Component, Input, OnInit } from '@angular/core';
import { Fencer } from '../fencer';

@Component({
  selector: '.app-fencer-scores',
  templateUrl: './fencer-scores.component.html',
  styleUrls: ['./fencer-scores.component.css']
})
export class FencerScoresComponent implements OnInit {

  @Input() fencers: Fencer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
