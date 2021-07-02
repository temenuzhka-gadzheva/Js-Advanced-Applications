function sort(data, input){
let sort = {
    asc: data => data.sort((a,b) => a-b),
    desc: data => data.sort((a,b) => b-a),
};
return sort[input](data);
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));