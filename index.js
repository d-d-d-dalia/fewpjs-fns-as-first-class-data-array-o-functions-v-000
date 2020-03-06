function wakeDog(a, b) {
  console.log(`Wake ${a} the ${b}`)
}

function leashDog(a, b) {
  console.log(`Leash ${a} the ${b}`)
}

function walkToPark(a, b) {
  console.log(`Walk to the park with ${a} the ${b}`)
}

function throwFrisbee(a, b) {
  console.log(`Throw the frisbee for ${a} the ${b}`)
}

function walkHome(a, b) {
  console.log(`Walk home with ${a} the ${b}`)
}

function unleashDog(a, b) {
  console.log(`Unleash ${a} the ${b}`)
}

function exerciseDog(dogName, dogBreed) {
  return routine.map(func => func(dogName, dogBreed))
}

const routine = [wakeDog(), leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]