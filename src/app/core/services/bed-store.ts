import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BedApi } from '../../bed-board/services/bed-api';
import { STORAGE_KEYS } from '../constants/storage-keys';
import { Storage } from './storage';
import { Bed } from '../models/bed.model';

@Injectable({
  providedIn: 'root',
})
export class BedStore {

  private bedsSubject = new BehaviorSubject<Bed[]>([]);
  beds$ = this.bedsSubject.asObservable();

  constructor(
    private bedApi: BedApi,
    private storage: Storage,
    // private websocket:WebSocket
  ) {}

  init(): void {
    const storedBeds = this.storage.get<Bed[]>(STORAGE_KEYS.BEDS);
    this.bedsSubject.next(storedBeds ?? []);
  }

  setBeds(beds: Bed[]): void {
    this.bedsSubject.next(beds);
    this.storage.set(STORAGE_KEYS.BEDS, beds);
  }
}
