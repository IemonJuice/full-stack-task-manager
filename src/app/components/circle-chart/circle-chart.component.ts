import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-circle-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle-chart.component.html',
  styleUrl: './circle-chart.component.scss'
})
export class CircleChartComponent implements  OnInit{
  chart: any = []

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],
        datasets: [{
          label: 'Productivity',
          data: [1, 10, 3, 5, 2, 3],
          borderWidth: 2,
          borderColor: "gray",
          backgroundColor: "white",
        }, {
          label: 'Productivity',
          data: [2, 2, 3, 9, 3, 3],
          borderWidth: 2,
          borderColor: "white",
          backgroundColor: "gray",
          hoverBackgroundColor: "white",
        },],
      },
      options: {scales: {y: {beginAtZero: true,},},},
    });
  }
}
