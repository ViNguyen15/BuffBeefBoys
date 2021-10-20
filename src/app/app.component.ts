import { Component } from '@angular/core';
import { stats } from 'src/assets/stats-section/lifts';
import { StatsSection } from './models/weightLifting.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuffBeefBoys';
  stats: StatsSection = stats;

  constructor(){}

  ngOnInit(): void {
    console.log('stats are: ',stats);
  }
}


