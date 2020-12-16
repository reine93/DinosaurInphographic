
    // Create Dino Constructor
    function Dino (name, kg, cm, food, where, when, truth) {
        this.species = name
        this.weight = kg
        this.height = cm
        this.diet = food
        this.place = where
        this.time = when
        this.fact = truth
    };
       
        // Create Dino Objects
     
      const dino1 = new Dino ("Triceraptops", 5897, 340, "Herbivore", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");
      const dino2 = new Dino ("Tyrannosaurus Rex", 2450, 365, "Carnivore", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
      const dino3 = new Dino ("Anklyosaurus", 4762, 140, "Herbivore", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
      const dino4 = new Dino ("Brachiosaurus", 31752, 945, "Herbivore", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
      const dino5 = new Dino ("Stegosaurus", 5262, 200, "Herbivore", "North America", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
      const dino6 = new Dino ("Elasmosaurus", 7258, 150, "Carnivore", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
      const dino7 = new Dino ("Pteranodon", 20, 51, "Carnivore", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
      const pigeon = new Dino ("Pigeon", 0.5, 0.22, "Herbivore", "World Wide", "Holocene", "all birds are living dinosaurs")

      let dinos = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, pigeon]
   
        // Create Human Object

        let human = {};
    
        // Use IIFE to get human data from form
    
        const button = document.getElementById('btn')
    
        button.addEventListener("click", function () { 
    
        let username = document.getElementById('username').value;
        let usercm = document.getElementById('usercm').value;
        let userkg = document.getElementById('userkg').value;
        let diet = document.getElementById('userdiet');
        let slctDiet = diet.options[diet.selectedIndex].text;

        return human = {
            name: username,
            height: usercm,
            weight: userkg,
            diet: slctDiet
        }
    })


        // Create Dino Compare Method 1
        // NOTE: Weight in JSON file is in lbs, height in inches. 

    function weightCompare () {
     let randomDino = dinos[Math.floor(Math.random() * dinos.length)];
     let weightRatio = (randomDino.weight / human.weight).toFixed(1);

     if (weightRatio > 1) {
     console.log (`${randomDino.species} weights ${weightRatio} times more than you!`) } 
     else if (weightRatio < 1) {
     console.log (`${randomDino.species} weights ${weightRatio} times less than you!`)
     } else {`Your weight is same as ${randomDino.species} ` }
    }

        // Create Dino Compare Method 2

    function heightCompare () {
        let randomDino = dinos[Math.floor(Math.random() * dinos.length)];
        let heightRatio = (randomDino.height / human.height).toFixed(1);
    
        if (heightRatio > 1) {
        console.log (`${randomDino.species} is ${heightRatio} times taller than you!`) } 
        else if (weightRatio < 1) {
        console.log (`${randomDino.species} is ${heightRatio} times shorter than you!`)
        } else {`Your height is same as ${randomDino.species} ` }  //maybe not height ratio but difference?
    }


        // Create Dino Compare Method 3
    //diet compare
     
    function dietCompare() {
      let randomDino = dinos[Math.floor(Math.random() * dinos.length)];

      if (randomDino.diet == human.diet) {
          console.log (`${randomDino.species} is also a ${human.diet} just like you!`)
      } else {console.log (`${randomDino.species}\'s diet is different than yours. He is a ${randomDino.diet}`)}
    };




    
    
        // Generate Tiles for each Dino in Array

        function TileGenerator() {


            const grid = document.getElementById("grid")

            for (i = 0; i < dinos.length; i++) {
                    let tiles = document.createElement("div");
                    tiles.className = "grid-item";
                    let dheader = document.createElement("h3");
                   // let dfact = document.createElement("p");
                    let species = document.createTextNode(dinos[i].species);
                   // let fact = document.createTextNode(dinos[i].fact);
                    dheader.appendChild(species)
                   // dfact.appendChild(fact)
                    tiles.appendChild(dheader)
                    //tiles.appendChild(dfact)
                    grid.appendChild(tiles)
                };

              

            };

      
            // Add tiles to DOM




    
        // Remove form from screen
    
    
    // On button click, prepare and display infographic
    
    
    button.addEventListener("click", function () {
       
        console.log("CLICKEN!!!");  
       
        

    ///working yay
    
    }); 
    