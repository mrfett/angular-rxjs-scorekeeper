import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {

  @Input() childText:string = "Default Child Text";
  @Input() childAction: (args: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
