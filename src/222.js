
function merge() {
  var ret = {}
  for (var i in arguments) {
    var m = arguments[i]
    for (var j in m) ret[j] = m[j]
  }
  return ret
}

var ad1 = '5'

var ada3 = 'gegesss'
console.log(merge({ a: 123 }, { b: 456 }))
console.log(ada3, ad1)
