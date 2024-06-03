import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createClient } from 'edgedb';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: 'EDGEDB_CLIENT',
      useFactory: (configService: ConfigService) => {
        return createClient({
          instanceName:
            configService.get<string>('EDGEDB_INSTANCE') ||
            process.env.EDGEDB_INSTANCE,
          secretKey:
            configService.get<string>('EDGEDB_SECRET_KEY') ||
            process.env.EDGEDB_SECRET_KEY,
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['EDGEDB_CLIENT'],
})
export class EdgeDbModule {}
export { default as e } from 'dbschema/edgeql-js';
