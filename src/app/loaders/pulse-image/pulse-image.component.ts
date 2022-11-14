import * as moment from "moment";

import { Component, OnInit } from '@angular/core';
import {Weekdays} from "../../type";

@Component({
  selector: 'app-pulse-image',
  templateUrl: './pulse-image.component.html',
  styleUrls: ['./pulse-image.component.less']
})
export class PulseImageComponent implements OnInit {
  imageSource: string;
  
  constructor() {
	const dayInteger = moment().day();
	this.imageSource = this.getDayImageByInteger(dayInteger);
  }

  ngOnInit() {
  }

  getDayImageByInteger(day: Weekdays) {
		switch(day) {
			case Weekdays.Monday:
				return "./assets/WarioIcon.png";
			case Weekdays.Tuesday:
				return "./assets/WaluigiIcon.png";
			case Weekdays.Wednesday:
				return "./assets/ToadIcon.png";
			case Weekdays.Thursday:
				return "./assets/LuigiIcon.png";
			case Weekdays.Friday:
				return "./assets/MarioIcon.png";
			case Weekdays.Saturday:
				return "./assets/PeachIcon.png";
			case Weekdays.Sunday:
				return "./assets/DaisyIcon.png";
		}
	}

}
