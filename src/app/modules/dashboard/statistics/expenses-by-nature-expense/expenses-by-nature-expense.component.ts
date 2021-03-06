import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

import { StatisticsRepository } from '../statistics-repository.service';
import { ChartUtilsService } from 'src/app/services/chart-utils.service';

@Component({
  selector: 'app-expenses-by-nature-expense',
  templateUrl: './expenses-by-nature-expense.component.html',
  styleUrls: ['./expenses-by-nature-expense.component.scss']
})
export class ExpensesByNatureExpenseComponent implements OnInit {

  errorMessage?: string;
  data: any;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Montant",
          fontStyle: '400',
          fontSize: 14
        },
        ticks: {
          callback: label => `${this.chartUtils.formatMillions(label)}`,
          stepSize: 500_000,
          showLabelBackdrop: true,
          fontStyle: '400',
          fontSize: 14
        }},
      ],
      xAxes: [{
        ticks: {
          fontSize: 14,
          fontStyle: '400'
        }
      }]
    }
  };

  public barChartLabel: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend: boolean = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private repository: StatisticsRepository, private chartUtils: ChartUtilsService) { }

  ngOnInit(): void {
    this.repository.getExpensesByNatureExpense()
      .subscribe((data) => {
        if(Object.keys(data).length !== 0) {
          this.barChartLabel = this.chartUtils.getChartLabelsForMonths(Object.keys(data));
          this.chartUtils.transFormJsonForBarChart(data)
            .forEach((items, label) => {
              this.barChartData.push({
                data: items,
                label: label
              }
            );
          })
        } else {
          this.errorMessage = "Données non disponibles."
        }
      },
      resp => this.errorMessage = resp.error.message
    );
  }
}
