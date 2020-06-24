// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapBox: {
    token: 'pk.eyJ1IjoicGF0ZXpubyIsImEiOiJjanp3ajJtbWUwMG1hM2JwNGNrb2dreWY5In0.nEKNqjeMeybCKz-tKnTm5A'
  },
  firebase: {
    apiKey: 'AIzaSyBCguRyLxP-MVk5ws2UJbjDUYi7vJlx0KQ',
    authDomain: 'we-poop.firebaseapp.com',
    databaseURL: 'https://we-poop.firebaseio.com',
    projectId: 'we-poop',
    storageBucket: 'we-poop.appspot.com',
    messagingSenderId: '805751619346',
    appId: '1:805751619346:web:4562ff71432961048dfdcb',
    measurementId: 'G-H2J065YDY9'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
