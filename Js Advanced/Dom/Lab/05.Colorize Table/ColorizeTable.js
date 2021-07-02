function colorize() {

 let coloredTownsAndNames = [...document.querySelectorAll('table tr:nth-child(even)')]
 .forEach(i => i.style.backgroundColor = 'teal');
}