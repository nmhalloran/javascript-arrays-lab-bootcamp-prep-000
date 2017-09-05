var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(array) {
  array.unshift()
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
