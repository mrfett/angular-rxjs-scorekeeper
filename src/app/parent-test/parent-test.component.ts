import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';

@Component({
  selector: '.app-parent-test',
  templateUrl: './parent-test.component.html',
  styleUrls: ['./parent-test.component.css']
})
export class ParentTestComponent implements OnInit {
  things$ = new BehaviorSubject("This is the starting text");

  constructor() { }

  ngOnInit(): void {
  }

  public changeThings = (message:string = "This is new text") => {
    this.things$.next(message);
    console.log("Parent method activated.");
  }

}
