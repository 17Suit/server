import { createClient } from 'edgedb';

const client = createClient({
  host: 'seventeen-suit-db--3fe3le.c-88.i.aws.edgedb.cloud',
  port: 5656,
  user: 'edgedb',
  password: '',
  database: 'seventeen-suit-db',
});

export default client;
