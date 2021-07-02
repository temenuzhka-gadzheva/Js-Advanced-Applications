function solve(dataArr) {

    let createVehicle = () => {
        let vehicles = {};

        return {
            create: (name, inherit, parentName) => {
                vehicles[name] = inherit ? Object.create(vehicles[parentName]) : {}
            },
            set: (name, key, value) => (vehicles[name][key] = value),
            print: (name) => {
                let results = [];
                for (const item in vehicles[name]) {
                
                    results.push(`${item}:${vehicles[name][item]}`);
                }
                console.log(results.join(', '));
            }
        }
    }
    let action = createVehicle();
    dataArr
    .map(e => e.split(' '))
    .forEach(([command,...args]) => action[command].apply(null,args));
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])