function solve(cityName, cityPopulation, cityTreasury) {
    let city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent){
            this.treasury -=Math.floor(this.treasury * percent / 100);
        },
    };
    return city
}

  