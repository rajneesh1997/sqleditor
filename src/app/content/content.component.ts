import {
  Component,
  OnInit,
  ViewChild,
  NgZone,
  ViewEncapsulation,
  Input,
  OnChanges,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import * as Papa from 'papaparse';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  headers: any = [];
  rows: any = [];
  query: any = '';

  constructor(private _ngZone: NgZone, private table: TablesService) {}

  @Input() data: string | undefined;

  ngOnChanges() {
    if (this.data != undefined && this.data != '') {
      this.query =
        'SELECT * FROM ' +
        this.data.charAt(0).toUpperCase() +
        this.data.slice(1);
      this.query += ';'
      this.table.getInfo(this.data).subscribe((data: any) => {
        data = Papa.parse(data);
        this.headers = data.data[0];
        this.rows = data.data.filter((element: any, index: number) => {
          if (index != 0) return element;
        });
      });
    }
  }

  ngOnInit() {
    this.table.getInfo('customers').subscribe((data: any) => {
      data = Papa.parse(data);
      this.headers = data.data[0];
      this.rows = data.data.filter((element: any, index: number) => {
        if (index != 0) return element;
      });
    });
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize | undefined;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize?.resizeToFitContent(true));
  }

  open(event: string) {
    console.log(event);
  }
}
