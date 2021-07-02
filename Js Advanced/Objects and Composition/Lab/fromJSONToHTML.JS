
function solve(json) {
    let jsonData = JSON.parse(json);
    let html = [`<table>`];
    html.push(keyRow(jsonData));
    jsonData.forEach((obj) => html.push(valueRow(obj)));
    html.push(`</table>`);
    console.log(html.join(`\n`));

    function keyRow(data) {
        let outPutRow = ` <tr>`;

        Object.keys(data[0]).forEach(x => {
            outPutRow += `<th>${escape(x)}</th>`;
        });
        outPutRow += `</tr>`;
        return outPutRow;
        
    }
    function valueRow(obj){
        let output = ` <tr>`;
        Object.values(obj).forEach(x => {
            output += `<td>${escape(x)}</td>`;
        });
        output += `</tr>`;
        return output;
    }

    function escape(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
console.log(solve('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'
));