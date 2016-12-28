
// @see https://community.topcoder.com/stat?c=problem_statement&pm=2922&rd=5855
export default class MedalTable {

  // @see 
  public static generate(medals: string[]): string[] {

    const counts = {};

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

   for (let c in counts) {
     counts[c] = counts[c].join(" ");
   }

   const t = new Tree();

   for (let n in counts) {
     t.insert(`${counts[n]} [${n}]`, n);
   }

   const table = t.inorder();

   for (let e in table) {
     const ctr = table[e].substring(table[e].indexOf('[')+1, table[e].indexOf('[')+4);
     table[e] = table[e].replace(/[^0-9\ ]+/g, '');
     table[e] = `${ctr} ${table[e]}`;
   }
   
   table.reverse();
   
   return table;
  }

 
}

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
