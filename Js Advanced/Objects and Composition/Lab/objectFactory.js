function solve(library, orders) {
    let result = [];
    for (const order of orders) {
        let current = Object.assign({}, order.template);

        for (const part of order.parts) {
          current[part] = library[part];
        }
        result.push(current);
    }
    return result;
}