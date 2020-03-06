function wakeDog() {
  console.log("Wake Byron the poodle")
}

function leashDog() {
  console.log("Leash Byron the poodle")
}

function walkToPark() {
  console.log("Walk to the park with Byron the poodle")
}

function throwFrisbee() {
  console.log("Throw the frisbee for Byron the poodle")
}

function walkHome() {
  console.log("Walk home with Byron the poodle")
}

function unleashDog() {
  console.log("Unleash Byron the poodle")
}

function exerciseDog(dogName, dogBreed) {
  routine.forEach(func => func(dogName, dogBreed))
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]