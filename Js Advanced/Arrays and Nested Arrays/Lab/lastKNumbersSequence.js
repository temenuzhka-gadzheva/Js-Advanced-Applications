function solve(n, k) {
    let sequence = [1];

    for(let i=1; i<n; i++) {
         let start = Math.max(0, i-k);
         let current = sequence
         .slice(start, start + k)
         .reduce((acc, el) => acc + el, 1);
         
         sequence.push(current);
    }

    console.log(sequence.join(' '));
 }
solve(6, 3);