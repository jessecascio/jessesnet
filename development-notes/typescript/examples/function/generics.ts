/*

*/

function push<T>(val: T): T {
  // cant cast generics: (<string> val).substring(0);
  return val;
}

// allows for generic, yet consistent, param passing
push(4);
push('sat');

// can be more explicit
push<number>(6);

// generic collections, letters dont matter
function size<G>(val: G[]): G[] {
  // or, Array<G>
  return val;
}

// can use with interfaces
interface IGeneric {
    <T>(arg: T): T;
}

function fnk<T>(arg: T): T {
    return arg;
}

const fng: IGeneric = fnk;

// can force additional props on generics
interface IGenericProp {
  length: number;
  fn(p1: number): boolean;
}

function wn<T extends IGenericProp>(arg: T): boolean {
  // return arg.length; - returns number
  return arg.fn(1); // assume generic will have this function
}
