function extractText() {
   
 let liElements = document.getElementsByTagName('li');
 let textOfLiElements = [...liElements].map(e => e.textContent);
 let result = document.getElementById('result').value = textOfLiElements.join('\n');

}