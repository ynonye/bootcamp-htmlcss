const myCountry = {
    country: "Lapland",
    capital: "lilput",
    language: "Hebrew",
    neighbours: "norway",
    describe: function () {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language} they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`); 
    }, 

    isIsland:function(){
      return this.neighbors.length == 0 ? true : false ;
    }
  };
  myCountry.describe()
  console.log(mycountry.isIsland());




