import { Component, OnInit } from '@angular/core';
import { EconomicIndicatorsService } from 'src/app/services/economic-indicators.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurrencyElement } from 'src/app/shared/interfaces/currency-element';
import { ResultValue } from 'src/app/shared/interfaces/result-values';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  public formGroup: FormGroup;

  currencyElement: CurrencyElement;

  valuesCurrencyElement: any;

  result = [];

  showValues = false;

  currencyOptions = [
    { id: '01', label: 'cobre'},
    { id: '01', label: 'dolar'},
    { id: '01', label: 'euro'},
    { id: '01', label: 'ipc'},
    { id: '01', label: 'ivp'},
    { id: '01', label: 'oro'},
    { id: '01', label: 'plata'},
    { id: '01', label: 'uf'},
    { id: '01', label: 'utm'},
    { id: '01', label: 'yen'}
  ];

  constructor(
    protected economicIndicatorsService: EconomicIndicatorsService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createSelectCurrencyForm();
  }

  createSelectCurrencyForm() {
    this.formGroup = this.formBuilder.group({
        selectCurrency: [''],
    });
  }

  changeValue() {
    this.showValues = false;
  }

  get selectCurrencyControl() {
    return this.formGroup.get('selectCurrency');
  }

  getValueCurreny() {
    const currency = this.selectCurrencyControl.value;
    this.economicIndicatorsService.getValueForElement(currency).
      subscribe(
        (data) => {
          this.currencyElement = data;
          this.result = [];
          this.valuesCurrencyElement = this.currencyElement.values;
          // tslint:disable-next-line: forin
          for (const i in this.valuesCurrencyElement) {
            this.result.push(i, this.valuesCurrencyElement[i]);
          }
          this.showValues = true;
          console.log(`Respuesta del servicio : ${JSON.stringify(this.result)}`);
        },
        (error) => {
          console.log(`Error al ejecutar la llamada al servicio: ${error}`);
        }
      );
  }

  callToMenu() {
    this.router.navigate([''], { skipLocationChange: true });
  }

}
