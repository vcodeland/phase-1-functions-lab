function distanceFromHqInBlocks(destinationBlockNumber) {
  // Calculates the distance, in blocks, from Scuber headquarters on 42nd Street to passenger pick-up location. 
  let startingBlockNumber;
  startingBlockNumber = 42;
  let distanceInBlocks;
  distanceInBlocks = Math.abs(destinationBlockNumber - startingBlockNumber);
  return distanceInBlocks
}

console.log(distanceFromHqInBlocks(43));
// Should return 1
console.log(distanceFromHqInBlocks(50));
// Should return 8
console.log(distanceFromHqInBlocks(34));
// Should return 8

function distanceFromHqInFeet(destinationBlockNumber) {
  // Converts the distance in blocks to distance in feet.
  let distanceInBlocks;
  distanceInBlocks = distanceFromHqInBlocks(destinationBlockNumber);
  let distanceInFeet;
  distanceInFeet = distanceInBlocks * 264
  return distanceInFeet
}

console.log(distanceFromHqInFeet(43));
// Should return 264
console.log(distanceFromHqInFeet(50));
// Should return 2112
console.log(distanceFromHqInFeet(34));
// Should return 2112

function distanceTravelledInFeet(startingBlockNumber, destinationBlockNumber) {
  // Calculates and returns distance traveled in feet.
  let distanceInBlocks;
  distanceInBlocks = Math.abs(destinationBlockNumber - startingBlockNumber);
  let distanceInFeet;
  distanceInFeet = distanceInBlocks * 264
  return distanceInFeet  
}

console.log(distanceTravelledInFeet(43, 48));
// Should return 1320
console.log(distanceTravelledInFeet(50, 60));
// Should return 2640
console.log(distanceTravelledInFeet(34, 28));
// Should return 1584

function calculatesFarePrice(startingBlockNumber, destinationBlockNumber) {
  // Calculates the trip fare price in dollars.
  let distanceInBlocks;
  distanceInBlocks = Math.abs(destinationBlockNumber - startingBlockNumber);
  let distanceInFeet;
  distanceInFeet = distanceTravelledInFeet(startingBlockNumber, destinationBlockNumber);
  let farePriceInDollars;
  if (distanceInFeet  < 400) {
    farePriceInDollars = 0; console.log('Remember the first 400 feet are free!')
  } else if (distanceInFeet >= 400 && distanceInFeet < 2000) {
    farePriceInDollars = (distanceInFeet - 400) * 0.02;
    console.log('Remember the first 400 feet are free! After that, 2 cents per foot.')
  } else if (distanceInFeet >= 2000 && distanceInFeet < 2500) {
    farePriceInDollars = 25;
    console.log('25 dollars flat rate for a distance over 2000 feet.')
  } else if (distanceInFeet >= 2500) {
    farePriceInDollars = 'cannot travel that far';
    console.log('No rides over 2500 feet.')
  }
  return farePriceInDollars
}

console.log(calculatesFarePrice(43, 44));
// Should log 'Remember the first 400 feet are free!
// Should return 0
console.log(calculatesFarePrice(34, 32));
// Should log 'Remember the first 400 feet are free! After that, 2 cents per foot.'
// Should return 2.56
console.log(calculatesFarePrice(50, 58));
// Should log '25 dollars flat rate for a distance over 2000 feet.'
// Should return 25
console.log(calculatesFarePrice(34, 24));
// Should log 'No rides over 2500 feet.
// Should return 'cannot travel that far'