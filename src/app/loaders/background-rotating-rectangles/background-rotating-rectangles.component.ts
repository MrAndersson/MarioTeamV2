import * as moment from "moment";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-rotating-rectangles',
  templateUrl: './background-rotating-rectangles.component.html',
  styleUrls: ['./background-rotating-rectangles.component.less']
})
export class BackgroundRotatingRectanglesComponent implements OnInit {
	dayOfWeekNumber: number;
	dayOfWeekString: string;

    
	colors: { [day: string]: Array<string> };

    constructor() { 

        // Default color scheme ["B70225", "00ff72", "ed55ff", "f4c030", "f05a4f"]

        this.colors = { };
        this.colors['Sunday']      = ["ffa76c", "ffdb3b", "8be1dd", "e08153"];     // Daisy
        this.colors['Monday']      = ["FDD50B", "E870A0", "78226D", "0D8129"];     // Wario
        this.colors['Tuesday']     = ["5d23ac", "737c86", "ff9e57", "faf22b"];     // Waluigi
        this.colors['Wednesday']   = ["ff000a", "ffd300", "0024f7", "c6744a"];     // Toad
        this.colors['Thursday']    = ["439c19", "2b4674", "a27059", "fffa03"];     // Luigi
        this.colors['Friday']      = ["FE0002", "0001FC", "FFD987", "6A0400"];     // Mario
        this.colors['Saturday']    = ["fbcae0", "d77a9f", "0269aa", "fef564"];     // Peach

        this.dayOfWeekNumber = moment().day();
		this.dayOfWeekString = moment().format("dddd");
    }

    ngOnInit() {
        setInterval(() => {
            this.generateSquare();
        }, 150);
    }

    generateball() {
        const section = document.querySelector('section');
        const ball = document.createElement('span');
        const tail = document.createElement('span');

        // BALL
        var posx = Math.random() * window.innerWidth;
        var posy = Math.random() * window.innerHeight;
        var colorIndex = Math.floor(Math.random() * this.colors[0].length);
        var color = '#' + this.colors[colorIndex];

        ball.style.left = posx + 'px';
        ball.style.top = posy + 'px';
        ball.style.background = color;

        tail.style.left = posx + 'px';
        tail.style.top = posy + 'px';
        tail.style.background = `linear-gradient(0deg, ${color}, #222)`;

        ball.appendChild(tail);
        section?.appendChild(ball);

        setInterval(() => {
            ball.remove();
        }, 12000);
    }

    generateSquare() {
        const section = document.querySelector('section');
        const square = document.createElement('span');

        var size = Math.random() * 50;
        var posx = Math.random() * window.innerWidth;
        var posy = Math.random() * window.innerHeight;
        var colorIndex = Math.floor(Math.random() * this.colors[this.dayOfWeekString].length);

        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';
        square.style.left = posx + 'px';
        square.style.top = posy + 'px';
        square.style.background = '#' + this.colors[this.dayOfWeekString][colorIndex];

        section?.appendChild(square);

        setInterval(() => {
            square.remove();
        }, 5000);
    }

}
