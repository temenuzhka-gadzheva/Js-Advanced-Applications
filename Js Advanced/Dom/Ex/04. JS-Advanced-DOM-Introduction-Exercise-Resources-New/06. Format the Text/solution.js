function solve() {
  let getTextEl = document.getElementById('input')
    .value.split('.')
    .filter(i => i);

  let getAppendToText = document.getElementById('output');
  newParagraphs(getTextEl);

  function newParagraphs(getTextEl) {
    let paragraphs = [];

    while (getTextEl.length > 0) {
      paragraphs.push(getTextEl.splice(0, 3)
        .join('.') + '.');
      console.log(paragraphs.length);
    }
    paragraphs.forEach(arg => (getAppendToText.innerHTML += `<p>${arg}</p>`));
  }

}