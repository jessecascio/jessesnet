import { query } from './Database';
import { call } from './Api';

doWork()

async function doWork() {
  const data = await query('query', {});
  console.log('Queried Database', data);

  const response = await call('http://google.com', data);
  console.log('made api call', response);

  console.log('(dis)Functional Programming!!!');
}