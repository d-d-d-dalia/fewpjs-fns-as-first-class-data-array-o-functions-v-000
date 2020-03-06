function wakeDog(a, b) {
  console.log("Wake Byron the poodle")
}

function leashDog(a, b) {
  console.log("Leash Byron the poodle")
}

function walkToPark(a, b) {
  console.log("Walk to the park with Byron the poodle")
}

function throwFrisbee(a, b) {
  console.log("Throw the frisbee for Byron the poodle")
}

function walkHome(a, b) {
  console.log("Walk home with Byron the poodle")
}

function unleashDog(a, b) {
  console.log("Unleash Byron the poodle")
}

function exerciseDog(dogName, dogBreed) {
  routine.forEach(func => func(dogName, dogBreed))
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]