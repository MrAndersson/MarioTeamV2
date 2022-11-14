import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autumn',
  templateUrl: './autumn.component.html',
  styleUrls: ['./autumn.component.less']
})
export class AutumnComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// this.genrateLeafs();
	}

    genrateLeafs() {
		const box = document.querySelector(".box");

		for (let i = 0; i < 10; i++) {
			const leaf = document.createElement("div");
			leaf.className = "leaf";
			const right = document.createElement("span");
			const left = document.createElement("span");
			const middle = document.createElement("span");
			
			leaf.style.zIndex = (Math.random() * 11).toString();

			leaf.appendChild(right);
			leaf.appendChild(left);
			leaf.appendChild(middle);
			
			box?.appendChild(leaf);
		}
    }
}
