function solve() {
  let getTextEl = document.getElementById('text').value.split(' ');
  let getTypeOfTextEl = document.getElementById('naming-convention').value;
  let getResult = document.getElementById('result');
  getResult.textContent = convert(getTextEl, getTypeOfTextEl);

  function convert(getTextEl, getTypeOfTextEl) {
      switch (getTypeOfTextEl) {
          case 'Camel Case':
              return getTextEl
                  .map((l) => l.toLowerCase())
                  .reduce((acc, characters, i) => {
                      i === 0 ?
                      characters :
                       (characters = characters[0].toUpperCase() 
                       + characters.slice(1));
                      return acc + characters;
                  }, '');
          case 'Pascal Case':
              return getTextEl
                  .map((l) => l.toLowerCase())
                  .reduce((acc, characters) => {
                      return acc + 
                      (characters[0].toUpperCase()
                       + characters.slice(1));
                  }, '');
          default:
              return 'Error!';
      }
  }
}