import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  constructor() { }

  buildCagadas() {
    const cagaderos = [];
    const c1 = {
      id: 1,
      name: 'Carlos',
      times: 2,
      groupId: [1, 2]
    };
    const c2 = {
      id: 2,
      name: 'Miguel',
      times: 4,
      groupId: [1, 2]
    };
    const c3 = {
      id: 3,
      name: 'Alberto',
      times: 1,
      groupId: [1]
    };
    const c4 = {
      id: 4,
      name: 'Mely',
      times: 1,
      groupId: [1]
    };
    const c5 = {
      id: 5,
      name: 'Rosa',
      times: 0,
      groupId: [1]
    };
    const c6 = {
      id: 6,
      name: 'Linus',
      times: 1,
      groupId: [2]
    };
    const c7 = {
      id: 7,
      name: 'Corey',
      times: 6,
      groupId: [2]
    };
    cagaderos.push(c1, c2, c3, c4, c5, c6, c7);
    return cagaderos;
  }

  getGroups() {
    const groups = [{id: 1}, {id: 2}];
    return of(groups);
  }

  getCadadas() {
    return of(this.buildCagadas());
  }
}
