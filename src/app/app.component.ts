import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sql-editor';
  tableDisplayed: any[] = [];
  data:string='';

  @Output() open = new EventEmitter<any>();

  constructor() {}

  tables = [
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

  tableSelected(table:string){
    debugger;
    this.data = table.toLowerCase();
  }
}
