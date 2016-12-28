
// @see https://community.topcoder.com/stat?c=problem_statement&pm=1585&rd=6535
export default class BusinessTasks {

  // @see http://www.topcoder.com/tc?module=Static&d1=match_editorials&d2=srm236
  public static getTask(tasks: string[], seed: number): string {
    /**
     * i = (j + n) % k
     *  i, index to delete
     *  j, start index
     *  n, seed - 1
     *  k, set size
     */
    let offset = 0;
    while (tasks.length > 1) {
      offset = (offset + seed - 1) % tasks.length;
      tasks.splice(offset, 1);
    }
    
    return tasks.pop();
  }

  public solution(tasks: string[], seed: number): string {
    
    while (tasks.length > 1) {
      
      let i;

      if (seed > tasks.length) {
        i = seed % tasks.length === 0 ? tasks.length - 1 : (seed % tasks.length) - 1;
      } else {
        i = seed - 1;
      }

      delete tasks[i];
      
      const tmp = [];
      
      for (let j=(i+1); j<tasks.length; j++) {
        if (tasks[j]) {
          tmp.push(tasks[j]);
        }
      }
      for (let k=0; k<(i+1); k++) {
        if (tasks[k]) {
          tmp.push(tasks[k]);
        }
      }

      tasks = tmp;
    }
    
    return tasks.pop();
  }
}