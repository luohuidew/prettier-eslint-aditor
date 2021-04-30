function merge() {
  var ret = {};
  for (var i in arguments) {
    var m = arguments[i];
    for (var j in m) ret[j] = m[j];
  }
  return ret;
}
   var ad = "5"

    var ada = 'gege';
console.log(merge({ a: 123 }, { b: 456 }))

function f(a, b) {
  return a + b
}
