
function solve(area, vol, input) {
    let coordinatesArr = JSON.parse(input);
    let resultArr = [];
    for (const coordinates of coordinatesArr) {
        let resultObj = {
            area: area.call(coordinates),
            volume: vol.call(coordinates),

        };
        resultArr.push(resultObj);

    }
    return resultArr;
}

function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}
solve(area, vol, '[ {"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')