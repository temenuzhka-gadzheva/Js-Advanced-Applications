function solve(input) {

    let allTowns = {};
    for (const towns of input) {

        let [name, population] = towns.split(' <-> ');
        population = Number(population);

        if (allTowns[name] != undefined) {
            population += allTowns[name];
        }
        allTowns[name] = population;
    }

    for (const town in allTowns) {
        console.log(`${town} : ${allTowns[town]}`);
    }

}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);