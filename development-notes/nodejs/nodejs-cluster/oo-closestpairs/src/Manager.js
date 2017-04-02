import Master from './Master';

export default class Manager {
  
  async process(size = 1000, workers = 1) {
    return await Master.start(size, workers);
  }
}