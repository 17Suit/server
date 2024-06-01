import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EdgedbModule } from './database/edgedb/edgedb.module';

@Module({
  imports: [UsersModule, EdgedbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
