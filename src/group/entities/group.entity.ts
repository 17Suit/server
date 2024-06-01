import { Plan } from 'src/plan/entities/plan.entity';
import { User } from 'src/user/dto/create-user.dto';

export class Group {
  id: number;
  name: string;
  description: string;
  members?: User[];
  plans?: Plan[];
}
