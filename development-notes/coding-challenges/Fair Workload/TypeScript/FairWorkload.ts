
// @see https://community.topcoder.com/stat?c=problem_statement&pm=1901&rd=4650
export default class FairWorkload {
  public static getMostWork(folders: number[], workers: number): number {
    // O(n)
    const sum = folders.reduce((i, j) => {
      return i + j;
    }, 0);
    const mark = sum / workers;

    const load = new Array();

    let iteration = 0;
    let j = 0;

    let min;
    let max;

    for (let i=0; i<folders.length; i++) {
      iteration += folders[i];

      if ((iteration >= mark) || (i === folders.length-1 && iteration > 0)) {
        
        for (;j<=i; j++) {
          load.push(folders[j]);
        }

        if (!max || max < iteration) {
          max = iteration;
        }
        if (!min || min > iteration) {
          min = iteration;
        }

        iteration = 0;
      }
    }
    
   

    return sum;
  }
}