/*
  - assertions are equivelant to casting
*/

let val: any = "hello";
let len: number = (<string> val).length;

// or
len = (val as string).length;

