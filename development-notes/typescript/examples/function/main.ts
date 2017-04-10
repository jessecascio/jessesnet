/*
  - optioanl params use ?
  - can capture additional params: ...restOfName: string[]
*/

// declare function types
let fnt: (p1: number) => boolean = (param: number): boolean => {
  return true;
};

console.log(fnt(3));

interface IFn {
  (p1?: number): boolean;
}

// or default w/ - pa1: number = 13
let fnr: IFn = (pa1?: number): boolean => {
  return false;
};

console.log(fnr());

// can overload functions, must collapse down
function sayName(fname: string): void;
function sayName(fname: any): void {
  console.log(fname);
}
