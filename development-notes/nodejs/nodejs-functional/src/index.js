import { query } from './Database';
import { get, call } from './Api';
import { del } from './DBCurry';

doWork()

async function doWork() {
  const data = await query('query', {});
  console.log('Queried Database', data);

  const response = await get('http://google.com', data);
  console.log('made api get', response);

  console.log('(dis)Functional Programming!!!');

  del("jp")(4)
    .then(d => {
      console.log('Curried', d);
    })
    .catch(e => {
      console.log('FAIL');
    });
}

/*

const S3 = new S3({ access, secret });
const c1 = S3.get('bizzo', 'rizzo1.json');
const c2 = S3.get('bizzo', 'rizzo2.json');

const c1 = S3.get({ access, secret })('bizzo', 'rizzo1.json');
const c2 = S3.get({ access, secret })('bizzo', 'rizzo2.json');

*/
