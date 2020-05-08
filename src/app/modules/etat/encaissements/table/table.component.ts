import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etat-encaissements-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() encaissements: any[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
