function extract(id) {
let output = [];
const textElements = document.getElementById(id).textContent;
const regex = new RegExp(/\((.+?)\)/, 'g');
let matchElement = regex.exec(textElements);

while (matchElement) {
    output.push(matchElement[1]);
    matchElement = regex.exec(textElements);
}
return output.join('; ');
}