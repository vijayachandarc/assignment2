import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  name = "";
  currentName = "";
  disableTextBox = false;

  constructor() {
    setTimeout(() => {
      this.disableTextBox=true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  getCurrentName() {
    this.currentName = "Current employee name is "+this.name;
  }

}
