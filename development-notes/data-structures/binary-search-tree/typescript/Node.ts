
export default class Node<K,V>
{
  public left: Node<K,V>;
  public right: Node<K,V>;

  public size: number;
  public key: K;
  public value: V;

  constructor(key:K, value:V, size:number) {
    this.key = key;
    this.value = value;
    this.size = size;
  }
}
