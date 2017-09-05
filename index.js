var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(kittens, kitten) {
  kittens.push(kitten)
  return kittens
}

function destructivelyPrependKitten(kittens, element) {
  kittens.unshift(element)
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
