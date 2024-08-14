import { Plan } from 'src/opt/plan/entities/plan.entity';
import { CreateUserDto } from 'src/suite/user/dto/create-user.dto';

export class Group {
  id: number;
  name: string;
  description: string;
  members?: CreateUserDto[];
  plans?: Plan[];
}
