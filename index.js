var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(array, element) {
  array.push(element)
  return array
}

function destructivelyPrependKitten(kittens) {
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
