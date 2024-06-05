import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Common module
import { EdgeDbModule } from './database/edgedb.module';
import { AuthModule } from './auth/auth.module';
// Application module
import { SuiteModule } from './suite/suite.module';
import { OptModule } from './opt/opt.module';

@Module({
  imports: [AuthModule, EdgeDbModule, SuiteModule, OptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
