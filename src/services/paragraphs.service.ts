import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphsService {

  paragraphs: String[] = ['what when why that then there noun yes no place house school cat dog',
                        'brown yellow blue green yellow red purple orange grey black gray brown white pink blue'];
  constructor() { }

  getParagraph(): String[]{
    return this.paragraphs;
  }
  getParaSize(): number{
    return this.paragraphs.length;
  }
}
