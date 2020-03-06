function wakeDog(a, b) {
  const string = `Wake ${a} the ${b}`
  console.log(string)
  return string
}

function leashDog(a, b) {
  const string = `Leash ${a} the ${b}`
  console.log(string)
  return string
}

function walkToPark(a, b) {
  console.log(`Walk to the park with ${a} the ${b}`)
  console.log(string)
  return string
}

function throwFrisbee(a, b) {
  console.log(`Throw the frisbee for ${a} the ${b}`)
  console.log(string)
  return string
}

function walkHome(a, b) {
  console.log(`Walk home with ${a} the ${b}`)
  console.log(string)
  return string
}

function unleashDog(a, b) {
  console.log(`Unleash ${a} the ${b}`)
  console.log(string)
  return string
}

function exerciseDog(dogName, dogBreed) {
  routine.map(func => func(dogName, dogBreed))
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]