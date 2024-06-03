import { createClient } from 'edgedb';

const client = createClient({
  // host: 'seventeen-suit-db--3fe3le.c-88.i.aws.edgedb.cloud',
  // port: 5656,
  // user: 'edgedb',
  // password: '',
  // database: 'seventeen-suit-db',
  // tlsSecurity: 'default',
  // credentials:
  instanceName: '3FE3LE/seventeen-suit-db',
  secretKey:
    'nbwt1_eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJlZGIuZC5hbGwiOnRydWUsImVkYi5pIjpbIjNGRTNMRS9zZXZlbnRlZW4tc3VpdC1kYiJdLCJlZGIuci5hbGwiOnRydWUsImlhdCI6MTcxNzI5NTMyNSwiaXNzIjoiYXdzLmVkZ2VkYi5jbG91ZCIsImp0aSI6IjFoTzQ5aUNIRWUtZFB5LWxzNFhid0EiLCJzdWIiOiJYbDJxcGh3c0VlLWVtYU1heTkxM1dnIn0.1V4LCB_One_iTQuz4x9pYcmR7dxZ3DolSNdj-idpAIMRtWhGdmEVVXO_FBsZ5BUfiVHgtbWfKBfR7KTAXZp3lQ',
});

export default client;
