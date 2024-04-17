import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { DataCompService } from '../data-comp.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {

  data: Company[] = []; 
  constructor(private dataService: DataCompService) {} 

  ngOnInit(): void {
      this.loadData(); 
  }
  loadData(): void {
    this.dataService.getData().subscribe((response: Company[])=> 
    {
      this.data = response
    });
  }
}
