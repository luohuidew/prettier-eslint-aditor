function merge() {
  var ret = {}
  for (var i in arguments) {
    var m = arguments[i]
    for (var j in m) ret[j] = m[j]
  }
  return ret
}

var ad1 = '5'

var add3 = 'gegesss'

console.log(ad1, add3, merge)
