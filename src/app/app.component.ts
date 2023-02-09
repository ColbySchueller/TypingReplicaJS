import { Component } from '@angular/core';
import { ParagraphsService } from 'src/services/paragraphs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typing-replica-js';
  paragraph: String = "";
  paragraphInChar: string[] = [];
  paragraphSize: number = 0;

  values = '';

  constructor(private paragraphService: ParagraphsService){
    this.paragraphService = paragraphService;
    this.getMaxParagraphList(); //get randomly generated paragraph
  }
  getMaxParagraphList(): void{
    const optionSize = this.paragraphService.getParaSize();
    //get paragraph list size
    const num = Math.floor(Math.random() * optionSize);
    this.paragraphSize = num;

    //generate random number
    this.getParagraph();
  }
  getParagraph(): void{
    this.paragraph = this.paragraphService.getParagraph()[this.paragraphSize];
    this.paragraphInChar = this.paragraph.split('');
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
}
