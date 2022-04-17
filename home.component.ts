import {  OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
  
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Mike SAI',      name: 'development', weight: 'ON', symbol: 'H'},
  {position: 'Sridhar',       name: 'development', weight: 'ON', symbol: 'He'},
  {position: 'DM',            name: 'development', weight: 'ON', symbol: 'Li'},
  {position: 'Mike-CY',       name: 'development', weight: 'ON', symbol: 'Be'},
  {position: 'Mike-Nee Shen', name: 'development', weight: 'OFF', symbol: 'B'},
  {position: 'Mike-Doug',     name: 'development', weight: 'OFF', symbol: 'C'},
  
];
