
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
     
      const dino1 = new Dino ("Triceraptops", 5897, 340, "herbivore", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");
      const dino2 = new Dino ("Tyrannosaurus Rex", 2450, 365, "carnivore", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.");
      const dino3 = new Dino ("Anklyosaurus", 4762, 140, "herbivore", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.");
      const dino4 = new Dino ("Brachiosaurus", 31752, 945, "herbivore", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.");
      const dino5 = new Dino ("Stegosaurus", 5262, 200, "herbivore", "North America", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.");
      const dino6 = new Dino ("Elasmosaurus", 7258, 150, "carnivore", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.");
      const dino7 = new Dino ("Pteranodon", 20, 51, "carnivore", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.");
      const pigeon = new Dino ("Pigeon", 0.5, 0.22, "herbivore", "World Wide", "Holocene", "all birds are living dinosaurs")

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

    

   
    
        
        // Create Dino Compare Method 2
        // NOTE: Weight in JSON file is in lbs, height in inches.

    //weight compare

    //function CompareWeight
    
        
        // Create Dino Compare Method 3
        // NOTE: Weight in JSON file is in lbs, height in inches.

    //diet compare

    //function CompareDiet
    
    
        // Generate Tiles for each Dino in Array
      
            // Add tiles to DOM
    
        // Remove form from screen
    
    
    // On button click, prepare and display infographic
    
    
    button.addEventListener("click", function () {
       
        console.log("CLICKEN!!!");  
    ///working yay
    
    }); 
    