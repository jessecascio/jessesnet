
// @see https://community.topcoder.com/stat?c=problem_statement&pm=2922&rd=5855
export default class MedalTable {

  // @see http://www.topcoder.com/tc?module=Static&d1=match_editorials&d2=srm209
  public static generate(medals: string[]): string[] {

    const counts = {};

    /**
     * step 1 - sum up the medals per country
     * {
     *    USA: [2, 4, 4],
     *    RUS: [3, 5, 0]
     * }
     */
    for (let i in medals) {
      const mds = medals[i].split(" ");
     
      for (let j in mds) {
        if (!counts[mds[j]]) {
          counts[mds[j]] = new Array(3);
          counts[mds[j]].fill(0, 0, 3)
        }
       
        counts[mds[j]][j]++;
      }
    }

    /**
     * step 2 - map medal counts to countries
     * {
     *    "2 4 4": ["USA", "JPN"]
     * }
     */
    const map = {};

    for (let cntry in counts) {
      const mdls = counts[cntry].join(" ");

      if (!map[mdls]) {
        map[mdls] = [];
      }

      map[mdls].push(cntry);
    }
    
    // step 3 - sort the medal counts
    const keys = Object.keys(map);
    keys.sort();

    // step 5 - for each medal count, enter country
    const table = [];

    for (let h=keys.length-1; h>=0; h--) {
      // sort by country name
      map[keys[h]].sort();

      for(let o in map[keys[h]]) {
        table.push(`${map[keys[h]][o]} ${keys[h]}`);
      }
    }
   
   return table;
  }
}

/**
 * wrong data structure
 */
class Tree {
  private root;

  insert(key, value) {
    this.root = this._insert(this.root, key, value)
  }

  private _insert(node, key, value) {
    if (!node) {
      return {
        key: key,
        value: value,
        left: undefined,
        right: undefined,
      }
    }

    if (node.key < key) {
      node.right = this._insert(node.right, key, value);
    } else if (node.key > key) {
      node.left = this._insert(node.left, key, value);
    } else {
      node.value = value;
    }

    return node;
  }

  inorder() {
    return this._traverse(this.root, new Array());
  }

  private _traverse(node, data) {
    if (!node) {
      return data;
    }

    this._traverse(node.left, data);
    data.push(`${node.key}`);
    this._traverse(node.right, data);

    return data;
  }
}
