function wakeDog(a, b) {
  console.log(`Wake ${a} the poodle`)
}

function leashDog(a, b) {
  console.log(`Leash ${a} the poodle`)
}

function walkToPark(a, b) {
  console.log(`Walk to the park with ${a} the poodle`)
}

function throwFrisbee(a, b) {
  console.log(`Throw the frisbee for ${a} the poodle`)
}

function walkHome(a, b) {
  console.log(`Walk home with ${a} the poodle`)
}

function unleashDog(a, b) {
  console.log(`Unleash ${a} the poodle`)
}

function exerciseDog(dogName, dogBreed) {
  routine.forEach(func => func(dogName, dogBreed))
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]