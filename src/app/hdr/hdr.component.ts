import { CallsService } from './../calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hdr',
  templateUrl: './hdr.component.html',
  styleUrls: ['./hdr.component.css']
})
export class HdrComponent implements OnInit {
  sources = [];
  start = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  end = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  constructor(private _callsService: CallsService) {}

  ngOnInit() {}

  getReport() {
    this.sources = null;
    this._callsService
      .getReport(this.start, this.end)
      .subscribe(resCallsData => (this.sources = resCallsData));
  }
}
