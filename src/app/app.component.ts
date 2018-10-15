import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emoji =  ['😀', '😁', '😂', '🤣' ]
  activeEmoji = 0;

  changeActiveEmoji(){
    console.log(this.activeEmoji)
    if(this.activeEmoji < this.emoji.length - 1){
      this.activeEmoji++;
    } else {
      this.activeEmoji = 0;
    }
  }

}
