import cluster from 'cluster';

export default class ProcessManager {

  isMaster() {
    return cluster.isMaster;
  }
}