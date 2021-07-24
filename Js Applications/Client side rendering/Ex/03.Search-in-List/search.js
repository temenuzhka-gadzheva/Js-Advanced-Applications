import { matchesTownsTemplate, matchTownTemplate, notMatchFound, townsTemplate } from "./townsTemplate/townsTemplate.js";
import { towns } from "./towns.js";
import { render } from "./../node_modules/lit-html/lit-html.js";

let townsDiv = document.getElementById('towns');

let baseTowns = towns.map(x => ({ name: x }));
render(townsTemplate(baseTowns), townsDiv);

let resultDiv = document.getElementById('result');
let searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', search);
function search() {
   let searchInput = document.getElementById('searchText');
   let searchText = searchInput.value.toUpperCase();
   searchInput.value = "";

   let allTowns = towns.map(x => ({ name: x }));
   let machesTown = allTowns.filter(x => x.name.toUpperCase().includes(searchText));
   machesTown.forEach(x => x.class = 'active');
   // count of matched towns
   let matches = machesTown.length;

   if (matches === 0) {
      render(notMatchFound(matches), resultDiv)
   } else if (matches === 1) {
      render(matchTownTemplate(matches), resultDiv)
   } else {
      render(matchesTownsTemplate(matches), resultDiv);
   }
   render(townsTemplate(allTowns), townsDiv);


}
