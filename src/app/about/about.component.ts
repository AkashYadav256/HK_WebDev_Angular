import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  leadErrMess: string;

  // selectedDish: Dish;

  constructor(@Inject('BaseURL') private BaseURL,
  private leaderService: LeaderService) { }

  ngOnInit() {
    // this.leaders = this.leaderService.getLeaders();
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
      errmess => this.leadErrMess = <any>errmess);
  }

  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }

}
