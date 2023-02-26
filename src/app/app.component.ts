import { Component, OnInit } from '@angular/core';
import { ParagraphsService } from 'src/services/paragraphs.service';
import { Paragraph } from './models/paragraph';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'typing-replica-js'; //title
  sourceParagraph = new Paragraph("");
  paragraph: string = ""; //source paragraph in string form
  paragraphInChar: string[] = [];
  paragraphSize: number = 0; //determine which paragrpah is used

  colorArray: number[] = []; //determines text color

  prevValueInString = "";
  valuesInString = "";
  currentValueIndex = 0;
  currentTarget = "";
  currentIndex = 0;
  val = true;

  //Timer
  timeLeft: number = 30;
  interval: any;
  GWPM: number | undefined;


  constructor(private paragraphService: ParagraphsService) {
    this.paragraphService = paragraphService;

  }
  ngOnInit(): void {
    this.getMaxParagraphList(); //get randomly generated paragraph

    //get current string
    this.valuesInString = this.sourceParagraph.userText;

    //Get latest color array
    this.colorArray = this.sourceParagraph.binaryArray;

    //start timer
    this.startTimer();

  }
  getMaxParagraphList(): void {
    const optionSize = this.paragraphService.getParaSize();
    //get paragraph list size
    const num = Math.floor(Math.random() * optionSize);
    this.paragraphSize = num;

    //generate random number
    this.getParagraph();
  }
  getParagraph(): void {
    this.paragraph = this.paragraphService.paragraphs[this.paragraphSize];
    this.sourceParagraph = new Paragraph(this.paragraph);
    this.paragraphInChar = this.sourceParagraph.textArray;
  }

  //Handling user input
  onKey(event: any) { // without type info
    this.sourceParagraph.validateInput(event.key);

    //get current string
    this.valuesInString = this.sourceParagraph.userText;

    //Get latest color array
    this.colorArray = this.sourceParagraph.binaryArray;

  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.calculateGWAM();
      }
    }, 1000)
  }
  calculateGWAM(){
    this.GWPM = this.sourceParagraph.calculateGWAM();
  }
}
