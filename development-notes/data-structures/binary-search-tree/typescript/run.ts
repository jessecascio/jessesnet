
import BST from './BinarySearchTree';
import Node from './Node';

const bst = new BST<string, number>();

bst.put('s', 2);
bst.put('e', 1);
bst.put('x', 8);
bst.put('a', 8);
bst.put('r', 8);
bst.put('c', 8);
bst.put('h', 8);
bst.put('m', 8);

console.log(bst.size(), bst.toArray());

bst.delete('h');
console.log(bst.size(), bst.toArray());

bst.delete('m');
console.log(bst.size(), bst.toArray());

