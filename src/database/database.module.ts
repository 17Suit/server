import { Module } from '@nestjs/common';
import client from './edgedb-client';
import e from './edgedb-schema';

@Module({
  providers: [
    {
      provide: 'DATABASE_CLIENT',
      useValue: client,
    },
    {
      provide: 'EDGEDB_SCHEMA',
      useValue: e,
    },
  ],
  exports: ['DATABASE_CLIENT', 'EDGEDB_SCHEMA'],
})
export class DatabaseModule {}
