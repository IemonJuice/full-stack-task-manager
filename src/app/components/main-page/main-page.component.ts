import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CircleChartComponent} from "../circle-chart/circle-chart.component";
import {LineChartComponent} from "../line-chart/line-chart.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, CircleChartComponent, LineChartComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
