import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

interface UserData {
  email: string;
  points: number;
  native: string;
  languageToLearn: string;
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

  getUserNativeLanguageByEmail(email: string): Observable<string | undefined> {
    const userRef = this.db.collection('users', (ref) =>
      ref.where('email', '==', email)
    );
    return userRef.snapshotChanges().pipe(
      map((actions) => {
        const userData = actions[0]?.payload.doc.data() as UserData;
        return userData?.native;
      })
    );
  }

  getUserLanguageToLearnByEmail(email: string): Observable<string | undefined> {
    const userRef = this.db.collection('users', (ref) =>
      ref.where('email', '==', email)
    );
    return userRef.snapshotChanges().pipe(
      map((actions) => {
        const userData = actions[0]?.payload.doc.data() as UserData;
        return userData?.languageToLearn;
      })
    );
  }

  updateUserPointsByEmail(email: string, newPoints: number): void {
    const userRef = this.db.collection('users').doc(email);

    userRef
      .update({
        points: newPoints,
      })
      .then(() => {
        console.log(`Points updated for ${email}.`);
      })
      .catch((error) => {
        console.error(`Error updating points for ${email}:`, error);
      });
  }

  updateUserNativeLanguageByEmail(email: string, newNative: string): void {
    const userRef = this.db.collection('users').doc(email);

    userRef
      .update({
        native: newNative,
      })
      .then(() => {
        console.log(`Native language updated for ${email}.`);
      })
      .catch((error) => {
        console.error(`Error updating native language for ${email}:`, error);
      });
  }

  updateUserLanguageToLearnByEmail(
    email: string,
    newLanguageToLearn: string
  ): void {
    const userRef = this.db.collection('users').doc(email);

    userRef
      .update({
        languageToLearn: newLanguageToLearn,
      })
      .then(() => {
        console.log(`Language to learn updated for ${email}.`);
      })
      .catch((error) => {
        console.error(`Error updating language to learn for ${email}:`, error);
      });
  }
}
