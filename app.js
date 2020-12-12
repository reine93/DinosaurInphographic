
    // Create Dino Constructor
    function Dino (name, kg, cm, truth) {
        this.species = name
        this.weight = kg
        this.height = cm
        this.fact = truth
    };
    
    
        // Create Dino Objects
      const dino1 = new Dino ("Triceraptops", 5897, 340, "First discovered in 1889 by Othniel Charles Marsh")
      const dino2 = new Dino ("Tyrannosaurus Rex", 11905, 144, "The largest known skull measures in at 5 feet long.")
      const dino3 = new Dino ("Anklyosaurus", 10500, 55, "Anklyosaurus survived for approximately 135 million years.")
      const dino4 = new Dino ("Brachiosaurus", 70000, 372, "An asteroid was named 9954 Brachiosaurus in 1991.")
      const dino5 = new Dino ("Stegosaurus", 11600, 79, "The Stegosaurus had between 17 and 22 seperate places and flat spines.")
      const dino6 = new Dino ("Elasmosaurus", 16000, 59, "Elasmosaurus was a marine reptile first discovered in Kansas.")
      const dino7 = new Dino ("Pteranodon", 44, 32040, "Actually a flying reptile, the Pteranodon is not a dinosaur.")
    
    
        // Create Human Object

        let human = {};
    
        // Use IIFE to get human data from form
    
        const button = document.getElementById('btn')
    
        button.addEventListener("click", function () { 
    
        let username = document.getElementById('username').value;
        console.log(username);
        let usercm = document.getElementById('usercm').value;
        console.log(usercm);
        let userkg = document.getElementById('userkg').value;
        console.log(userkg);
        let diet = document.getElementById('userdiet');
        let slctDiet = diet.options[diet.selectedIndex].text;
        console.log(slctDiet)

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
    
        
        // Create Dino Compare Method 3
        // NOTE: Weight in JSON file is in lbs, height in inches.
    
    
        // Generate Tiles for each Dino in Array
      
            // Add tiles to DOM
    
        // Remove form from screen
    
    
    // On button click, prepare and display infographic
    
    
    button.addEventListener("click", function () {
       
        console.log("CLICKEN!!!");  
    ///working yay
    
    }); 
    