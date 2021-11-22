//Write an asynchronous function and call it with async/await
// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function

function getRandomNumber() {
  let p1 = new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        Math.random();
      }, 500)
    );
  });
  return p1;
}


async function invoker(func){
    await func();
    console.log(func());
}

invoker(getRandomNumber);


//Fetch remote data using async/await
// Write an asynchronous function that accepts 1 parameter - A city name
// When invoked, this function should use geocode.xyz's API to retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)

async function dataRetriever(cityName) {
    let updatedURL = `https://geocode.xyz/`+ cityName +`?json=1`;
    let result = await fetch (updatedURL);
    let data = await result.json();
    console.log(data.latt);
    console.log(data.longt);
}

dataRetriever("seattle");
dataRetriever("pittsburgh");
dataRetriever("boston");