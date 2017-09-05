var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(array) {
  array.push()
  return array
}

function destructivelyPrependKitten(array) {
  kittens.unshift()
  return kittens
}

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(kittens) {
  kittens.shift()
  return kittens
}
