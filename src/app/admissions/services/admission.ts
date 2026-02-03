import { Injectable } from '@angular/core';
import { BedStore } from '../../core/services/bed-store';

@Injectable({
  providedIn: 'root',
})
export class Admission {
  constructor(private bedStore:BedStore){}
}
