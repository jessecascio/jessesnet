import Master from './Master';

export default class Manager {
  
 

  process(cluster, size = 1000, workers = 1) {
    
      return Master.start(cluster, size, workers);
    
  }
}