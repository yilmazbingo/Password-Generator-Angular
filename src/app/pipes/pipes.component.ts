import { Component, OnInit } from '@angular/core';
import { ConvertPipe } from './convert.pipe.component';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  name: string;
  date: string;
  amount: number;
  miles: number;

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  constructor() {}

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
  ngOnInit(): void {}
}
