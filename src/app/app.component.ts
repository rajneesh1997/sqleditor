import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sql-editor';
  data: string = '';
  tables: any[] = [];

  @Output() open = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.tables = [
      'Categories',
      'Customers',
      'Employee_Territories',
      'Employees',
      'Order_Details',
      'Orders',
      'Products',
      'Regions',
      'Shippers',
      'Suppliers',
      'Territories',
    ];
  }

  tableSelected(table: string) {
    this.data = table.toLowerCase();
  }

  searchQuery(event: any) {
    let ind: any = undefined;
    event = event?.toLowerCase();

    for (let i = 0; i < this.tables.length; i += 1) {
      if (event.search(this.tables[i]?.toLowerCase()) != -1) {
        ind = i;
        break;
      }
    }

    let madeupQuery = 'select * from ' + this.tables[ind]?.toLowerCase();
    if (event.charAt(event.length - 1) == ';') event = event.slice(0, -1);

    if (event == madeupQuery) this.tableSelected(this.tables[ind]);
  }
}
