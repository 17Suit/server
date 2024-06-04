import { Group } from 'src/opt/group/entities/group.entity';

export class Plan {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  userId: number;
  activities?: Activity[];
  group?: Group;
}
export interface Activity {
  id: number;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  planId: number;
}
