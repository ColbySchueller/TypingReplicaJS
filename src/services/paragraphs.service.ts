import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphsService {

  paragraphs: string[] = ["Josh had spent year and year accumulating the information. He knew it inside out and if there was ever anyone looking for an expert in the field, Josh would be the one to call. The problem was that there was nobody interested in the information besides him and he knew it. Years of information painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic.",
                        "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
                      "All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.",
                      "It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened. I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work. He was going to get her wrath and there was nothing I could say to prevent it."];
  constructor() { }

  getParagraph(): String[]{
    return this.paragraphs;
  }
  getParaSize(): number{
    return this.paragraphs.length;
  }
}
