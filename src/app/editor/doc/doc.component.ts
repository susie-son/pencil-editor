import { Component, Input } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
  @Input() doc;

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {}
}
