(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
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
planetEl.innerHTML = "<h1>Planet List</h1>";
planets.forEach(planet => {
  planetEl.innerHTML += `
    <section>
      ${planet}
    </section>
  `;
  planetEl.innerHTML += "<hr/>";
});
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const uppedPlanets = planets.map(planet => {
  return planet.toUpperCase();
});
console.log(uppedPlanets);
uppedPlanets.forEach(planet => {
  planetEl.innerHTML += `
      <section>

        ${planet}

      </section>
    `;
  planetEl.innerHTML += "<hr/>";
});
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet => {
  let withE = false;

  if (planet.includes("e")) {
    withE = true;
  }

  return withE;
});
ePlanets.forEach(planet => {
  planetEl.innerHTML += `
    <section>
        ${planet}
    </section>    
    `;
  planetEl.innerHTML += "<hr/>";
}); // Use the reduce method to create a sentence from the words in the following array

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
const wordySentence = words.reduce((currentTotal, next) => currentTotal + " " + next);
planetEl.innerHTML += `<section>  ${wordySentence}  </section>`; // wordySentence.forEach(sentence => {
//     planetEl.innerHTML+= `
//     <section>
//         ${sentence}
//     </section> 
//     `
//     planetEl.innerHTML += "<hr/>"
// });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sT0FBTyxHQUFHLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsRUFBc0MsU0FBdEMsRUFBaUQsUUFBakQsRUFBMkQsUUFBM0QsRUFBcUUsU0FBckUsQ0FBaEI7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLHNCQUFyQjtBQUVBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLE1BQU0sSUFBSTtBQUN4QixFQUFBLFFBQVEsQ0FBQyxTQUFULElBQXVCOztRQUVqQixNQUFPOztHQUZiO0FBS0EsRUFBQSxRQUFRLENBQUMsU0FBVCxJQUFzQixPQUF0QjtBQUNELENBUEQ7QUFVQTs7Ozs7Ozs7QUFPQSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sSUFBSTtBQUN2QyxTQUFPLE1BQU0sQ0FBQyxXQUFQLEVBQVA7QUFDSCxDQUZvQixDQUFyQjtBQUdBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUVBLFlBQVksQ0FBQyxPQUFiLENBQXFCLE1BQU0sSUFBSTtBQUMzQixFQUFBLFFBQVEsQ0FBQyxTQUFULElBQXVCOzs7VUFHakIsTUFBTzs7O0tBSGI7QUFPQSxFQUFBLFFBQVEsQ0FBQyxTQUFULElBQXNCLE9BQXRCO0FBQ0QsQ0FUSDtBQVlBOzs7Ozs7OztBQU9BLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBTSxJQUFJO0FBQ3RDLE1BQUksS0FBSyxHQUFHLEtBQVo7O0FBRUEsTUFBSSxNQUFNLENBQUMsUUFBUCxDQUFnQixHQUFoQixDQUFKLEVBQTBCO0FBQ3RCLElBQUEsS0FBSyxHQUFHLElBQVI7QUFDSDs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQVJjLENBQWpCO0FBVUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxJQUFJO0FBQ3ZCLEVBQUEsUUFBUSxDQUFDLFNBQVQsSUFBc0I7O1VBRWhCLE1BQU87O0tBRmI7QUFLQSxFQUFBLFFBQVEsQ0FBQyxTQUFULElBQXNCLE9BQXRCO0FBQ0gsQ0FQRCxFLENBU0E7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixNQUFqQixFQUF5QixPQUF6QixFQUFrQyxLQUFsQyxFQUF5QyxLQUF6QyxFQUFnRCxNQUFoRCxFQUF3RCxLQUF4RCxFQUErRCxLQUEvRCxFQUFzRSxRQUF0RSxFQUFnRixPQUFoRixFQUF5RixNQUF6RixFQUFpRyxLQUFqRyxFQUF3RyxRQUF4RyxDQUFkO0FBRUEsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FDbEIsQ0FBQyxZQUFELEVBQWUsSUFBZixLQUF3QixZQUFZLEdBQUcsR0FBZixHQUFxQixJQUQzQixDQUF0QjtBQUtBLFFBQVEsQ0FBQyxTQUFULElBQXVCLGNBQWEsYUFBYyxjQUFsRCxDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHBsYW5ldHMgPSBbXCJtZXJjdXJ5XCIsIFwidmVudXNcIiwgXCJlYXJ0aFwiLCBcIm1hcnNcIiwgXCJqdXBpdGVyXCIsIFwic2F0dXJuXCIsIFwidXJhbnVzXCIsIFwibmVwdHVuZVwiXVxuXG4vKlxuICAgIFVzZSB0aGUgZm9yRWFjaCBtZXRob2QgdG8gYWRkIHRoZSBuYW1lIG9mIGVhY2ggcGxhbmV0XG4gICAgdG8gYSBzZWN0aW9uIGVsZW1lbnQgaW4geW91ciBIVE1MIHdpdGggYW4gaWQgb2YgXCJwbGFuZXRzXCIuXG4gICAgVXNlIHN0cmluZyB0ZW1wbGF0ZXMgdG8gY29uc3RydWN0IHRoZSBET00gZWxlbWVudHMuXG4qL1xuLy8gY29uc3QgcGxhbmV0T3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4vLyBjb25zdCBwbGFuZXRDcmVhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4vLyBwbGFuZXRDcmVhdG9yLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxhbmV0c1wiKTtcbi8vIHBsYW5ldE91dHB1dC5hcHBlbmRDaGlsZChwbGFuZXRDcmVhdG9yKTtcbmNvbnN0IHBsYW5ldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG5wbGFuZXRFbC5pbm5lckhUTUwgPSBcIjxoMT5QbGFuZXQgTGlzdDwvaDE+XCJcblxucGxhbmV0cy5mb3JFYWNoKHBsYW5ldCA9PiB7XG4gIHBsYW5ldEVsLmlubmVySFRNTCArPSBgXG4gICAgPHNlY3Rpb24+XG4gICAgICAke3BsYW5ldH1cbiAgICA8L3NlY3Rpb24+XG4gIGBcbiAgcGxhbmV0RWwuaW5uZXJIVE1MICs9IFwiPGhyLz5cIlxufSk7XG5cblxuLypcbiAgICBVc2UgdGhlIG1hcCBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IGFycmF5IHdoZXJlIHRoZVxuICAgIGZpcnN0IGxldHRlciBvZiBlYWNoIHBsYW5ldCBpcyBjYXBpdGFsaXplZC4gVXNlIHRoZVxuICAgIGB0b1VwcGVyQ2FzZSgpYCBtZXRob2Qgb24gc3RyaW5ncy5cblxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy90b1VwcGVyQ2FzZVxuKi9cbmNvbnN0IHVwcGVkUGxhbmV0cyA9IHBsYW5ldHMubWFwKHBsYW5ldCA9PiB7XG4gICAgcmV0dXJuIHBsYW5ldC50b1VwcGVyQ2FzZSgpO1xufSlcbmNvbnNvbGUubG9nKHVwcGVkUGxhbmV0cyk7ICBcblxudXBwZWRQbGFuZXRzLmZvckVhY2gocGxhbmV0ID0+IHtcbiAgICBwbGFuZXRFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgPHNlY3Rpb24+XG5cbiAgICAgICAgJHtwbGFuZXR9XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG4gICAgcGxhbmV0RWwuaW5uZXJIVE1MICs9IFwiPGhyLz5cIlxuICB9KTtcblxuXG4vKlxuICAgIFVzZSB0aGUgZmlsdGVyIG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgYXJyYXkgdGhhdFxuICAgIGNvbnRhaW5zIHBsYW5ldHMgd2l0aCB0aGUgbGV0dGVyICdlJy4gVXNlIHRoZSBgaW5jbHVkZXMoKWBcbiAgICBtZXRob2Qgb24gc3RyaW5ncy5cblxuICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9pbmNsdWRlc1xuKi9cbmNvbnN0IGVQbGFuZXRzID0gcGxhbmV0cy5maWx0ZXIocGxhbmV0ID0+IHtcbiAgICBsZXQgd2l0aEUgPSBmYWxzZVxuICBcbiAgICBpZiAocGxhbmV0LmluY2x1ZGVzKFwiZVwiKSkge1xuICAgICAgICB3aXRoRSA9IHRydWVcbiAgICB9XG4gIFxuICAgIHJldHVybiB3aXRoRVxuICB9KVxuXG5lUGxhbmV0cy5mb3JFYWNoKHBsYW5ldCA9PiB7XG4gICAgcGxhbmV0RWwuaW5uZXJIVE1MKz0gYFxuICAgIDxzZWN0aW9uPlxuICAgICAgICAke3BsYW5ldH1cbiAgICA8L3NlY3Rpb24+ICAgIFxuICAgIGBcbiAgICBwbGFuZXRFbC5pbm5lckhUTUwgKz0gXCI8aHIvPlwiXG59KTtcblxuLy8gVXNlIHRoZSByZWR1Y2UgbWV0aG9kIHRvIGNyZWF0ZSBhIHNlbnRlbmNlIGZyb20gdGhlIHdvcmRzIGluIHRoZSBmb2xsb3dpbmcgYXJyYXlcbmNvbnN0IHdvcmRzID0gW1wiVGhlXCIsIFwiZWFybHlcIiwgXCJiaXJkXCIsIFwibWlnaHRcIiwgXCJnZXRcIiwgXCJ0aGVcIiwgXCJ3b3JtXCIsIFwiYnV0XCIsIFwidGhlXCIsIFwic2Vjb25kXCIsIFwibW91c2VcIiwgXCJnZXRzXCIsIFwidGhlXCIsIFwiY2hlZXNlXCJdXG5cbmNvbnN0IHdvcmR5U2VudGVuY2UgPSB3b3Jkcy5yZWR1Y2UoXG4gICAgKGN1cnJlbnRUb3RhbCwgbmV4dCkgPT4gY3VycmVudFRvdGFsICsgXCIgXCIgKyBuZXh0XG4pXG5cblxucGxhbmV0RWwuaW5uZXJIVE1MICs9IGA8c2VjdGlvbj4gICR7d29yZHlTZW50ZW5jZX0gIDwvc2VjdGlvbj5gXG5cbi8vIHdvcmR5U2VudGVuY2UuZm9yRWFjaChzZW50ZW5jZSA9PiB7XG4vLyAgICAgcGxhbmV0RWwuaW5uZXJIVE1MKz0gYFxuLy8gICAgIDxzZWN0aW9uPlxuLy8gICAgICAgICAke3NlbnRlbmNlfVxuLy8gICAgIDwvc2VjdGlvbj4gXG4vLyAgICAgYFxuLy8gICAgIHBsYW5ldEVsLmlubmVySFRNTCArPSBcIjxoci8+XCJcbi8vIH0pOyJdfQ==
