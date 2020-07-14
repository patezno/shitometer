import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private storageService: StorageService
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.storageService.setObject('user', this.userData);
      } else {
        this.storageService.removeItem('user');
      }
    });
  }

  // Login in with email/password
  signIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  registerUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  async sendVerificationMail() {
    return (await this.ngFireAuth.currentUser).sendEmailVerification().then(() => {
      this.router.navigate(['verify-email']);
    });
  }

  // Recover password
  passwordRecover(passwordResetEmail: any) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    let user;
    this.storageService.getObject('user').then((usr) => user = usr);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    let user;
    this.storageService.getObject('user').then((usr) => user = usr);
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in with Gmail
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  authLogin(provider: any) {
    return this.ngFireAuth.signInWithPopup(provider).then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
       this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error);
    });
  }

  // Store user in capacitor storage
  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign-out
  signOut() {
    return this.ngFireAuth.signOut().then(() => {
      this.storageService.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
