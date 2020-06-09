import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latex',
  templateUrl: './latex.component.html',
  styleUrls: ['./latex.component.scss'],
})
export class LatexComponent implements OnInit {
  @Input() equation;
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
