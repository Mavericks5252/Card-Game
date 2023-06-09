import { Component,OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-reset-popup',
  templateUrl: './reset-popup.component.html',
  styleUrls: ['./reset-popup.component.css']
})


export class ResetPopupComponent implements OnInit {
  @Input() player1Count;
  @Input() player2Count;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {win: number}
  ) { }

  ngOnInit(): void {}
 
  
}
