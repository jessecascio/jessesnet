/*

*/

const o: any = {
  p1: 1,
  p2: 2,
  p3: '3',
  p4: 'food'
};

// still declare types
let { p1, p3 }: { p1: number, p3: string } = o;
console.log(p1);

// name override
let { p1: p1new, p3: p3new }: { p1: number, p3: string } = o;
console.log(p1new);

// dyb