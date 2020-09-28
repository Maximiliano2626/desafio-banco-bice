import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EconomicIndicatorsService } from 'src/app/services/economic-indicators.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-date',
  templateUrl: './search-date.component.html',
  styleUrls: ['./search-date.component.scss']
})
export class SearchDateComponent implements OnInit {

  public formGroup: FormGroup;

  elementInformation: any;

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
    private router: Router,
    protected economicIndicatorsService: EconomicIndicatorsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createSearchForm();
  }

  callToMenu() {
    this.router.navigate([''], { skipLocationChange: true });
  }

  createSearchForm() {
    this.formGroup = this.formBuilder.group({
        date: [''],
        selectElement: [''],
    });
  }

  get dateControl() {
    return this.formGroup.get('date');
  }

  get selectElementControl() {
    return this.formGroup.get('selectElement');
  }

  callDataForDate() {
    const element = this.selectElementControl.value;
    const date = this.dateControl.value;
    this.economicIndicatorsService.getValueForDate(element, date).
      subscribe(
        (data) => {
          this.elementInformation = data;
          console.log(JSON.stringify(this.elementInformation));
        },
        (error) => {
          console.log(`Error al ejecutar la llamada al servicio: ${error}`);
        }
      );
  }

}
