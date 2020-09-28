import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss']
})
export class MenuOptionsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  callScreenLastValues() {
    this.router.navigate(['last-values-elements'], { skipLocationChange: true });
  }

  callScreenAllValuesForElement() {
    this.router.navigate(['select-option'], { skipLocationChange: true });
  }

  callScreenForDate() {
    this.router.navigate(['search-date'], { skipLocationChange: true });
  }

}
