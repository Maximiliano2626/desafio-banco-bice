import { Component, OnInit } from '@angular/core';
import { EconomicIndicatorsService } from 'src/app/services/economic-indicators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-values-elements',
  templateUrl: './last-values-elements.component.html',
  styleUrls: ['./last-values-elements.component.scss']
})
export class LastValuesElementsComponent implements OnInit {

  elements: any;

  showValues = false;

  constructor(
    protected economicIndicatorsService: EconomicIndicatorsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getLastValuesDataEconomicIndicators();
  }

  getLastValuesDataEconomicIndicators() {
    this.economicIndicatorsService.getLastDataEconomicIndicators()
    .subscribe(
      (data) => {
        this.elements = data;
        this.showValues = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  callToMenu() {
    this.router.navigate([''], { skipLocationChange: true });
  }

}
