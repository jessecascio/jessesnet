
var arr = new Array();

for (var i=0; i<10000; i++) {
  arr.push(i);
}

console.log('built...', arr.length);

// sync
arr.forEach(function(val) {
  console.log(val)
});

function async(data, cb) {
  arr.forEach(function(val) {
    setTimeout(cb, 0);
  });
}

async(arr, function(val){
  console.log(val)
});
