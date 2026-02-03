export interface AuditLog {
  id: number;
  action: string;
  entityId: number;
  entityType: 'BED' | 'PATIENT' | 'ADMISSION';
  timestamp: string;
}
