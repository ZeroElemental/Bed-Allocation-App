export type BedStatus = 'FREE' | 'OCCUPIED' | 'CLEANING' | 'RESERVED';

export interface Bed {
  id: number;
  bedNumber: string;
  roomId: number;
  wardId: number;
  status: BedStatus;
  patientId?: number;
}
