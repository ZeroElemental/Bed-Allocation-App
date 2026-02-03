export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  condition: 'NORMAL' | 'CRITICAL';
}
