import { Component, OnInit} from '@angular/core';
import { CardData } from './cards.model';
import { MatDialog } from '@angular/material/dialog';
import { ResetPopupComponent } from './reset-popup/reset-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'card-game';

  cardImages = [];
  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  
  matchedCount = 0;
  player1Count=0;
  player2Count=0;
  turn=1;
  win=0;

  //this is to pick the images for the cards
  pickrandCards(numCards,min,max,anArray:any[]):any[]{
    min = Math.ceil(min);
    max = Math.floor(max);
    while (anArray.length < numCards/2){
      var I = Math.floor(Math.random() * (max - min) + min);
      if(anArray.includes(I) === false){
        anArray.push(I);
      }
    }
    return anArray;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  shuffleArray(anArray: any[]): any[]{
    return anArray.map(a =>[Math.random(),a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog){

  }
  ngOnInit(): void {
    this.setupCards();
    this.turn=this.getRandomInt(2)+1;

  }

  setupCards(): void {
    this.cards = [];
    
    //this is to pick the images for the cards
    this.pickrandCards(20,1,52,this.cardImages);
    for (var i =0; i<this.cardImages.length;i++){
      //console.log(this.cardImages[i]);
      const cardData: CardData = {
        imageId: this.cardImages[i],
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    };
    //randomize order of cards
    this.cards = this.shuffleArray(this.cards);
  }

  //method for checking if card is clicked
  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    }
  }

  //check if both clicked cards are a match
  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];
      if(this.turn === 1){
        if (nextState === 'matched') {
          this.matchedCount++;
          this.player1Count++;
        }
        else{
          this.turn = 2;
        }
      }else if(this.turn === 2){
        if (nextState === 'matched') {
          this.matchedCount++;
          this.player2Count++;
        }
        else{
          this.turn = 1;
        }
      }
      //game complete text with winner
      if (this.matchedCount === this.cardImages.length){
        if (this.player1Count > this.player2Count){
          this.win = 1;
        }
        else if(this.player1Count < this.player2Count){
          this.win = 2;
        }
        else{
          this.win =0;
        }
        let dialogRef = this.dialog.open(ResetPopupComponent, {
          disableClose: true,
          data :{ win: this.win}
        });

        dialogRef.afterClosed().subscribe(() => {
          this.restart();
        });
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
    this.player1Count = 0;
    this.player2Count = 0;
  }



}




