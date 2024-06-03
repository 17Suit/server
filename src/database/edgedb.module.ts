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
            process.env.EDGEDB_INSTANCE ||
            '3FE3LE/seventeen-suit-db',
          secretKey:
            configService.get<string>('EDGEDB_SECRET_KEY') ||
            process.env.EDGEDB_SECRET_KEY ||
            'nbwt1_eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJlZGIuZC5hbGwiOnRydWUsImVkYi5pIjpbIjNGRTNMRS9zZXZlbnRlZW4tc3VpdC1kYiJdLCJlZGIuci5hbGwiOnRydWUsImlhdCI6MTcxNzI5NTMyNSwiaXNzIjoiYXdzLmVkZ2VkYi5jbG91ZCIsImp0aSI6IjFoTzQ5aUNIRWUtZFB5LWxzNFhid0EiLCJzdWIiOiJYbDJxcGh3c0VlLWVtYU1heTkxM1dnIn0.1V4LCB_One_iTQuz4x9pYcmR7dxZ3DolSNdj-idpAIMRtWhGdmEVVXO_FBsZ5BUfiVHgtbWfKBfR7KTAXZp3lQ',
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['EDGEDB_CLIENT'],
})
export class EdgeDbModule {}
export { default as e } from 'dbschema/edgeql-js';
