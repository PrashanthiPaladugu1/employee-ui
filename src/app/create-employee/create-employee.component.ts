import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save(){
    this.employeeService.createEmployee(this.employee)
    .subscribe(
              data => console.log(data),
              error => console.log(error)
              );
    this.employee = new Employee();

  }
}
