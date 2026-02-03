import { Injectable } from '@angular/core';
import { BedApi } from '../../bed-board/services/bed-api';

@Injectable({
  providedIn: 'root',
})
export class BedStore {
  constructor(private bedApi: BedApi,private websocket:WebSocket){}
}
