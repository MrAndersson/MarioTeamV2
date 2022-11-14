import * as moment from "moment";
import * as momentTz from "moment-timezone";

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MQuote, T, Weekdays, ColorArrayClass } from "./type";

import { 
	faCoffee, 		
	faCodeFork, 
	faUserSecret, 
	faMicrochip,
	faCodeBranch,
	faTerminal,
	faCodeMerge,
	faCodeCompare,
	faBugSlash,
	faGhost,
	faUserAstronaut,
	faRobot,
	faRocket,
	faSkullCrossbones,
	faExclamationCircle,
	faPaperPlane,
	faBullhorn,
	faBullseye,
	faAt,
	faAtlas
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  httpOptions: { headers: any; observe: any; } = {
	  headers: new HttpHeaders({
		  'Content-Type': 'application/json'
	  }),
	  observe: 'response'
  };

//   calendarApiUrl: string;
//   riddleUrl: string;

  todayIs: string;
  riddle: string;
  namesDay: string;
  weekNr: string;
  quotes: Array<MQuote>;

  IST: any;
  CET: any;

  dayOfWeekNumber: number;
  dayOfWeekString: string;

  /*
	  Version Two variables
  */

  httpCallCompletes: boolean;

	//#region FontAwesome
	faCoffee = faCoffee;
	faCodeFork = faCodeFork;
	faUserSecret = faUserSecret;
	faMicrochip = faMicrochip;
	faCodeBranch = faCodeBranch;
	faTerminal = faTerminal;
	faCodeMerge = faCodeMerge;
	faCodeCompare = faCodeCompare;
	faBugSlash = faBugSlash;
	faGhost = faGhost;
	faUserAstronaut = faUserAstronaut;
	faRobot = faRobot;
	faRocket = faRocket;
	faSkullCrossbones = faSkullCrossbones;
	faExclamationCircle = faExclamationCircle;
	faPaperPlane = faPaperPlane;
	faBullhorn = faBullhorn;
	faBullseye = faBullseye;
	faAt = faAt;
	faAtlas = faAtlas;
	//#endregion FontAwesome
  constructor(public http: HttpClient) {

	this.quotes = [];
	this.todayIs = "";
	this.riddle = "";
	this.namesDay = "";
	this.weekNr = "";
	// const today : Date = new Date();
	// this.calendarApiUrl = `https://api.dryg.net/dagar/v2.1/${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;
	// this.riddleUrl      = 'https://www.riddles.com/riddle-of-the-day';

	setInterval(() => {
		this.IST = momentTz().tz("Asia/Kolkata").format("HH:mm:ss");
		this.CET = momentTz().tz("Europe/Stockholm").format("HH:mm:ss");
	}, 1000);

	this.dayOfWeekNumber = moment().day();
	this.dayOfWeekString = moment().format("dddd");

	/*
	  Version Two variables
	*/
	
	this.httpCallCompletes = false;
	
	setInterval(() => {

		/**
		 * IST Time Change
		 */
		let istHours = momentTz().tz("Asia/Kolkata").format("HH");
		let istMins = momentTz().tz("Asia/Kolkata").format("mm");
		let istSecs = momentTz().tz("Asia/Kolkata").format("ss");

		document.getElementById("istHourOne")?.setAttribute("class", `digit0${istHours.substring(0,1)}`);
		document.getElementById("istHourTwo")?.setAttribute("class", `digit0${istHours.substring(1,2)}`);

		document.getElementById("istMinuteOne")?.setAttribute("class", `digit0${istMins.substring(0,1)}`);
		document.getElementById("istMinuteTwo")?.setAttribute("class", `digit0${istMins.substring(1,2)}`);
		
		document.getElementById("istSecondOne")?.setAttribute("class", `digit0${istSecs.substring(0,1)}`);
		document.getElementById("istSecondTwo")?.setAttribute("class", `digit0${istSecs.substring(1,2)}`);

		/**
		 * CET Time Change
		 */
		let cetHours = momentTz().tz("Europe/Stockholm").format("HH");
		let cetMins = momentTz().tz("Europe/Stockholm").format("mm");
		let cetSecs = momentTz().tz("Europe/Stockholm").format("ss");

		document.getElementById("cetHourOne")?.setAttribute("class", `digit0${cetHours.substring(0,1)}`);
		document.getElementById("cetHourTwo")?.setAttribute("class", `digit0${cetHours.substring(1,2)}`);

		document.getElementById("cetMinuteOne")?.setAttribute("class", `digit0${cetMins.substring(0,1)}`);
		document.getElementById("cetMinuteTwo")?.setAttribute("class", `digit0${cetMins.substring(1,2)}`);
		
		document.getElementById("cetSecondOne")?.setAttribute("class", `digit0${cetSecs.substring(0,1)}`);
		document.getElementById("cetSecondTwo")?.setAttribute("class", `digit0${cetSecs.substring(1,2)}`);
	}, 1000);
  }

  ngOnInit() {
	  this.http.get<Array<T>>("https://sheetsu.com/apis/v1.0su/2453f9630a26").subscribe(e => {
			this.todayIs = e[0].todayIs;
			this.riddle = e[0].todaysRiddle;
			this.namesDay = e[0].nameDay;
			this.quotes = e.map((item: T, i: number) => ({
				visible: i === 0,
				quote: item.quote
			} as MQuote));
		  

			setInterval(() => {
				this.http.get<Array<T>>("https://sheetsu.com/apis/v1.0su/2453f9630a26").subscribe(e => {
					this.todayIs = e[0].todayIs;
				});
			}, 3600000); // 1 Hour


			setInterval(() => {
				this.setQuoteVisibility();
			}, 600000); // 1 Min

			setInterval(() => {
				this.httpCallCompletes = true;
			}, 3000); // 3 sec
		  
	  });

	  // let calendar = this.http.get<veckodag>(this.calendarApiUrl, { headers: this.httpOptions });
	  // let riddle   = this.http.get('https://www.riddles.com/riddle-of-the-day', { headers: this.httpOptions, responseType:'text' });
	  // let quotes   = this.http.get<Array<quotes>>('./assets/quotes.json');
	  // forkJoin([calendar, riddle, quotes]).subscribe(res => {
	  // 	let days = res[0];
	  // 	let DOM = res[1];
	  // 	let quotesArray = res[2];
	  // 	this.todayIs  = days.dagar[0].flaggdag || days.dagar[0].veckodag;
	  // 	this.namesDay = days.dagar[0].namnsdag.join(" & ");
	  // 	this.weekNr   = days.dagar[0].vecka;
	  // 	let resSTR = JSON.stringify(DOM);
	  // 	const parser = new DOMParser();
	  // 	var doc = parser.parseFromString(resSTR, "text/html");
	  // 	this.riddle = doc.body.getElementsByTagName('blockquote')[0].innerText;
	  // 	var nr = Math.floor((Math.random() * quotesArray.length) + 1);
	  // 	this.quoteOfTheDay = quotesArray[nr].quote;
	  // });
  }

  setQuoteVisibility() {
	  let pos = this.getNextItemInArray(this.quotes);

	  this.quotes.map((item: MQuote, i: number) => {
		  item.visible = i === pos;
	  });
  }

  getNextItemInArray(array: Array<MQuote>): number {
	  let tmp = array.slice(0);
	  tmp = tmp.map((item: MQuote, i: number) => {
		//   if (item.visible) {
		// 	  return (i + 1 !== tmp.length) ? tmp[i + 1] : tmp[0];
		//   }
		return (i + 1 !== tmp.length) ? tmp[i + 1] : tmp[0];
	  })
	  .filter((item: MQuote) => item);

	  return this.quotes.indexOf(tmp[0]);
  }

getDaysStringByInteger(day: Weekdays) {
  switch(day) {
	case Weekdays.Monday:
	  return "Monday";
	case Weekdays.Tuesday:
	  return "Tuesday";
	case Weekdays.Wednesday:
	  return "Wednesday";
	case Weekdays.Thursday:
	  return "Thursday";
	case Weekdays.Friday:
	  return "Friday";
	case Weekdays.Saturday:
	  return "Saturday";
	case Weekdays.Sunday:
	  return "Sunday";
  }
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

  /**
   * Version Two Functions
   */

  getCurrentDayImageAndAdjacentDays() {
	  /**
	   * 0 - Sun 
	   * 1 - Mon
	   * 2 - Tue 
	   * 3 - Wed
	   * 4 - Thur
	   * 5 - Fri
	   * 6 - Sat
	   */
	  
	  let arr = [];
	  let left = this.dayOfWeekNumber === Weekdays.Sunday ? Weekdays.Saturday: (this.dayOfWeekNumber - 1);
	  let right = this.dayOfWeekNumber === Weekdays.Saturday ? Weekdays.Sunday : (this.dayOfWeekNumber + 1);

	  arr.push(this.dayOfWeekNumber);
	  arr.unshift(left);
	  arr.push(right);

	  return arr;
  }
}
