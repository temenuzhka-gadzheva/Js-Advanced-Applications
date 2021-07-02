
// formatting alt shift f;
function solve(arr) {
    const sortByTwoCrt = (current, next) => 
    current.length - next.length ||
     current.localeCompare(next);
     arr.sort(sortByTwoCrt);
     console.log(arr.join('\n'));
}
/*solve(['alpha',
    'beta',
    'gamma']
);*/

solve(['test', 
'Deny', 
'omen', 
'Default']
);

