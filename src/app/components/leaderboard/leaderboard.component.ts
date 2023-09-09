import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { LeaderboardData } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  leaderboardData: LeaderboardData[] = [];

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.leaderboardService.getLeaderboard().subscribe((data) => {
      this.leaderboardData = data;
    });
  }
}
