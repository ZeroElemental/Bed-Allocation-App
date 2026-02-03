export interface Admission {
  id: number;
  patientId: number;
  bedId: number;
  admittedAt: string;
  dischargedAt?: string;
  status: 'ACTIVE' | 'TRANSFERRED' | 'DISCHARGED';
}
