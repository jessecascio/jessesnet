
let Service = require('./service');
let service = new Service();

worker();

async function worker() {
  await service.api();
  console.log('done...');
}