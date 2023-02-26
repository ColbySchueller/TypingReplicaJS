export class Paragraph {
    public text: string;
    public userText: string;
    public textArray: string[]; //text tracker
    public binaryArray: number[]; //color tracker
    public index: number;
    public sourceFlag = true;
    public minLength: number;
    public wordsPerMinute: number;
    constructor(text: string) {
        this.text = text;
        this.textArray = text.split('');
        this.index = 0;
        this.userText = "";
        this.binaryArray = Array(this.getStringLength()).fill(-1);
        this.minLength = this.getStringLength();
        this.wordsPerMinute = 0;
    }

    public getStringLength() {
        return this.textArray.length;
    }
    public appendStringAtIndex(index: number, letter: string) {
        this.textArray.splice(index, 0, letter);
    }
    public validateInput(letter: string) {
        if (letter.length == 1) {
            if (this.textArray[this.index] == letter) {
                this.checkSourceLength();
                if (this.sourceFlag) {

                    //increment index
                    this.index++;
                    //move on
                    this.sourceFlag = true;
                    this.setBinary(1);

                    //Check if word is completed...
                    if(letter == ' ')
                        this.wordsPerMinute++;
                }
            }
            else {
                this.appendStringAtIndex(this.index, letter);
                this.binaryArray.splice(this.index, 0, 0);
                this.index++;
                this.sourceFlag = false;
                this.setBinary(0);

            }
        }
        else if (letter == 'Backspace') {
            //remove a word per minute if you backspace
            if (this.sourceFlag) {
                if(this.textArray[this.index - 1] == ' ')
                    this.wordsPerMinute--;
            }
            this.popLetter();
        }
    }
    public popLetter() {
        if(this.index != 0){
            if (this.sourceFlag) {
                this.setBinary(-1);
                this.index--;
            }
            else {
                //need to add another if statement bc this is where the issue is
    
                //if string length is not equal to this.minLength
                if (this.getStringLength() != this.minLength) {
                    this.textArray.splice(this.index - 1, 1);
                    this.popBinary(); //remove the binary color reference
                    this.index--;
                    this.checkSourceLength();
                }
                else {
                    this.checkSourceLength();
                }
            }
        }
    }
    //setting letter to red
    public setBinary(num: number) {
        this.binaryArray[this.index - 1] = num;
    }
    //Removing reference to invalid letter
    public popBinary() {
        if (!this.sourceFlag)
            this.binaryArray.splice(this.index - 1, 1);
    }
    public checkSourceLength() {
        if (this.getStringLength() == this.minLength) {
            this.sourceFlag = true;
        }
        else {
            this.sourceFlag = false;
        }
    }
    public calculateGWAM(){
        //calculate the amount of words per minute
        return (this.wordsPerMinute / (30/60));
    }

}
