import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements  OnInit {
  chart: any = []

  ngOnInit() {
    this.chart = new Chart('canvas-2', {
      type: 'pie',
      data: {
        labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],
        datasets: [{
          label: 'Productivity',
          data: [1, 10, 3, 5, 2, 3],
          borderWidth: 2,
          borderColor: "black",
          backgroundColor: "white",
        }, {
          label: 'Productivity',
          data: [2, 2, 3, 9, 3, 3],
          borderWidth: 2,
          borderColor: "white",
          backgroundColor: "black",
          hoverBackgroundColor: "white",
        },],
      },
      options: {scales: {y: {beginAtZero: true,},},},
    });
  }
}
