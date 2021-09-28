import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor(private http: HttpClient) {}
  Data =
    'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/';
  getInfo(table: string) {
    return this.http.get(this.Data + `${table}` + '.csv', {
      responseType: 'text',
    });
  }
}
