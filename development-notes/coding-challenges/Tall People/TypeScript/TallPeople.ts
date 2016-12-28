
// @see https://community.topcoder.com/stat?c=problem_statement&pm=2923&rd=5854
export default class TallPeople {

  // @see http://www.topcoder.com/tc?module=Static&d1=match_editorials&d2=srm208
  public static getPeople(people: string[]): number[] {

    const rows = [];
    const cols = [];
    
    for(let i in people) {
      const parts = people[i].split(" ");
      rows.push(parts);

      for (let j in parts) {
        if (!cols[j]) {
          cols[j] = [];
        }

        cols[j].push(parts[j]);
      }
    }

    const minRows = [];
    const maxCols = [];

    for (let k in rows) {
      minRows.push(Math.min(...rows[k]));
    }
    for (let h in cols) {
      maxCols.push(Math.max(...cols[h]));
    }

    return [Math.max(...minRows), Math.min(...maxCols)];
  }
}