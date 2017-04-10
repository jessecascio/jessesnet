/*
  - works for object, array, function contracts as a "dictionary" pattern
  - signaturs force all signature, [index: string]: number;
  - use 'readonly' for const on properties
*/

interface IObject {
  fname: string;
  lname?: string;
  unknown?: any;
  [propName: string]: any; // fail safe, for any number of more string props
}

let oj = {
  fname: 'john',
  unknwon: {},
  extra1: 3243
};

console.log(oj);

// can use intefaces on functions as well
interface IFunction {
  (p1: number, p2: string): boolean;
}

const fn: IFunction = (pa1: number, pa2: string): boolean => {
  return true;
};

// or
const fn2 = <IFunction> (pa1: number, pa2: string): boolean => {
  return true;
};

console.log(fn(1, '1'));

// or arrays
interface IArray {
    [index: number]: string;
}

const arr: IArray = ['Bob', 'Dole'];

// signatures
/*
interface ISignature {
  [index: string]: number;
  name: string; // error
  age: number;
}
*/
