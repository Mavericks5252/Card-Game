
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Input() player1Count;
    @Input() player2Count;
    @Input() turn;
    

}

/*<<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand">
         <a href ="#" class="navbar-brand">Card Game</a>
         <ul class ="navbar-nav mx-auto">
              <li class="nav-item">Player 1: {{player1Count}}</li>
             <li class="nav-item">Player 2: {{player2Count}}</li>
        </ul>
    </a>
</nav>

*/