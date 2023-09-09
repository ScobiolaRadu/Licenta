import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface LeaderboardData {
  name: string;
  points: number;
}

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  constructor(private firestore: AngularFirestore) {}

  getLeaderboard(): Observable<LeaderboardData[]> {
    const leaderboardRef = this.firestore.collection<LeaderboardData>(
      'users',
      (ref) => ref.orderBy('points', 'desc')
    );

    return leaderboardRef.valueChanges();
  }
}
