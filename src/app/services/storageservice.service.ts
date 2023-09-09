import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

interface UserData {
  email: string;
  points: number;
  // Add other fields as needed
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private db: AngularFirestore) {}

  getUserPointsByEmail(email: string): Observable<number | undefined> {
    const userRef = this.db.collection('users', (ref) =>
      ref.where('email', '==', email)
    );
    return userRef.snapshotChanges().pipe(
      map((actions) => {
        const userData = actions[0]?.payload.doc.data() as UserData;
        return userData?.points;
      })
    );
  }
}
