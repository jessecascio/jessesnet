
import FairWorkload from "./FairWorkload";

const folders = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
];

const max = FairWorkload.getMostWork(folders, 3);
console.log(max);
