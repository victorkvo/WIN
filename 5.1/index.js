// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function



function getRandomNumber() {
    let promise = new Promise((resolve, reject)=>{
      setTimeout(() => resolve(Math.floor(Math.random() * 8)), 500)
    });
    return promise;
}

async function call(){
   let result = await getRandomNumber();;
     console.log(result); 
}

call();
 
 

  async function city(cityName) {
    let response = fetch(`https://geocode.xyz/${cityName}?json=1`)
    .then((response) => response.json())
    .then((result) => {
        console.log(cityName);
        console.log(result.longt);
        console.log(result.latt);
        document.getElementById("one").innerHTML=result.latt;
        document.getElementById("two").innerHTML=result.alt.loc.longt;
        
    })
    .catch((error) => console.log("error", error));
    
}
city("Seattle");
city("Houston");
city("Charlotte");