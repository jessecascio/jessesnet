
import Node from './Node';

export default class BinarySearchTree<K, V>
{
  private root: Node<K,V>;

  put(key:K, value:V) {
    this.root = this._put(this.root, key, value);
  }

  get(key:K):V {
    return this._get(this.root, key);
  }

  min():K {
    const node = this._min(this.root);
    return node ? node.key : null;
  }

  max():K {
    return this._max(this.root, this.root.key);
  }

  size(): number {
    return this.root.size;
  }

  reset():void {
    delete this.root;
  }

  floor(key:K):K {
    const node = this._floor(this.root, key);
    return node.key;
  }

  deleteMin():boolean {
    const node = this._deleteMin(this.root);
    return node ? true : false;
  }

  delete(key:K):boolean {
    const node = this._delete(this.root, key);
    return node ? true : false;
  }

  private _delete(node:Node<K,V>, key:K): Node<K,V> {
    if (!node) {
      return null;
    }

    let equal = true;

    if (node.key > key) {
      equal = false;
      node.left = this._delete(node.left, key);
    } else if (node.key < key) {
      equal = false;
      node.right = this._delete(node.right, key);
    }

    if (!equal) {
      node.size = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
      return node;
    }

    // nodes are equal
    if (!node.right) {
      return node.left;
    }
    if (!node.left) {
      return node.right;
    }

    let successor = this._min(node.right);
    successor.right = this._deleteMin(successor);
    successor.left = node.left;
    successor.size = this.nodeSize(successor.left) + this.nodeSize(successor.right) + 1;
    return successor;
  }

  toArray():Array<V> {
    return this._traverse(this.root, new Array<V>());
  }

  select(selection:number):K {
    const node = this._select(this.root, selection);
    return node.key;
  }

  private _select(node:Node<K,V>, selection):Node<K,V> {
    return node;
  }

/**
  * select()
  * rank()
  * delete()
  * deleteMin()
  * deleteMax()
  * keys()
  * range() - query
*/

  private _deleteMin(node:Node<K,V>): Node<K,V> {
    if (!node) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }

    node.left = this._deleteMin(node.left);
    node.size = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
    return node;
  }

  private _min(node:Node<K,V>):Node<K,V> {
    if (!node) {
      return null;
    } else if(!node.left) {
      return node;
    } else {
      return this._min(node.left);
    }
  }

  private _floor(node:Node<K,V>, key:K):Node<K,V> {
    if (!node) {
      return null;
    }
    if (node.key === key) {
      return node;
    }
    if (node.key > key) {
      return this._floor(node.left, key);
    }

    let newnode = this._floor(node.right, key);
    if (newnode) {
      return newnode;
    } else {
      return node;
    }
  }

  private _max(node:Node<K,V>, key:K):K {
    if (!node || !node.right) {
      return key;
    } else if(node.right.key > key) {
      return this._max(node.right, node.right.key);
    } else {
      return key;
    }
  }

  private _traverse(node:Node<K,V>, data:Array<V>): Array<V> {
    if (!node) {
      return data;
    }

    this._traverse(node.left, data);
    data[String(node.key)] = node.value;
    this._traverse(node.right, data);

    return data;
  }

  private _put(node:Node<K,V>, key:K, value:V) {
    if (!node) {
      return new Node<K,V>(key, value, 1);
    }

    if (node.key > key) {
      node.left = this._put(node.left, key, value);
    } else if (node.key < key) {
      node.right = this._put(node.right, key, value);
    } else {
      node.value = value;
    }

    node.size = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;

    return node;
  }

  private _get(node:Node<K,V>, key:K):V {
    if (!node) {
      return null;
    }

    if (node.key === key) {
      return node.value;
    } else if (node.key > key) {
      return this._get(node.left, key);
    } else {
      return this._get(node.right, key);
    }
  }

  private nodeSize(node) {
    return node ? node.size : 0;
  }

}