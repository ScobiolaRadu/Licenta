import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { LeaderboardData } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  leaderboardData: LeaderboardData[] = [];
  user$ = this.authService.currentUser$;

  constructor(
    private leaderboardService: LeaderboardService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.leaderboardService.getLeaderboard().subscribe((data) => {
      this.leaderboardData = data;
    });
  }
}
