import * as moment from "moment";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.less']
})
export class SquaresComponent implements OnInit {

	dayOfWeekNumber: number;
	loaderIds: string[];

	constructor() { 
        this.dayOfWeekNumber = -1;
        this.loaderIds = [];
    }

	ngOnInit() {
		this.dayOfWeekNumber = moment().day();
		this.loaderIds = [
			"loaderDaisy",
			"loaderWario", 
			"loaderWaluigi",
			"loaderToad",
			"loaderLuigi",
			"loaderMario",
			"loaderPeach"];
	}
}
