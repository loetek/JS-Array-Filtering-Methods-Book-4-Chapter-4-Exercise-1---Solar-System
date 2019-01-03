const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const planetOutput = document.querySelector(".output");
// const planetCreator = document.createElement("article");
// planetCreator.setAttribute("id", "planets");
// planetOutput.appendChild(planetCreator);
const planetEl = document.querySelector(".output");
planetEl.innerHTML = "<h1>Planet List</h1>"

planets.forEach(planet => {
  planetEl.innerHTML += `
    <section>
      ${planet}
    </section>
  `
  planetEl.innerHTML += "<hr/>"
});


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const uppedPlanets = planets.map(planet => {
    return planet.toUpperCase();
})
console.log(uppedPlanets);  

uppedPlanets.forEach(planet => {
    planetEl.innerHTML += `
      <section>

        ${planet}

      </section>
    `
    planetEl.innerHTML += "<hr/>"
  });


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = planets.filter(planet => {
    let withE = false
  
    if (planet.includes("e")) {
        withE = true
    }
  
    return withE
  })

ePlanets.forEach(planet => {
    planetEl.innerHTML+= `
    <section>
        ${planet}
    </section>    
    `
    planetEl.innerHTML += "<hr/>"
});

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const wordySentence = words.reduce(
    (currentTotal, next) => currentTotal + " " + next
)


planetEl.innerHTML += `<section>  ${wordySentence}  </section>`

// wordySentence.forEach(sentence => {
//     planetEl.innerHTML+= `
//     <section>
//         ${sentence}
//     </section> 
//     `
//     planetEl.innerHTML += "<hr/>"
// });