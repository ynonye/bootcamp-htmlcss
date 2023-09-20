const myCountry = {
    country: "Lapland",
    capital: "lilput",
    population: 7000000,
    language: "Hebrew",
    length: 8345000,
    neighbours: "norway",
    describe: function () {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language} and a capital called ${this.capital}.`); 
    }, 

    isIsland:function(){
      return this.neighbors.length == 0 ? true : false ;
    }
  };
  myCountry.describe()
  console.log(myCountry.isIsland());




