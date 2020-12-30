
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

    const dinoInfo = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivore",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivore",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }];

    const dinos = dinoInfo.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.place, dino.time, dino.fact))

   
        // Create Human Object

        let human
 
        function Person (username,usercm,userkg,slctDiet) {
            this.name = 'human'
            this.height = usercm
            this.weight = userkg
            this.diet = slctDiet
            this.displayName = username
        }    
        // Use IIFE to get human data from form

        function fromForm () {

            let username = document.getElementById('username').value;
            let usercm = document.getElementById('usercm').value;
            let userkg = document.getElementById('userkg').value;
            let diet = document.getElementById('userdiet');
            let slctDiet = diet.options[diet.selectedIndex].text;
    
            return human = new Person (username,usercm,userkg,slctDiet)
        }


        // Create Dino Compare Method 1
        // NOTE: Weight in JSON file is in lbs, height in inches. 

    function weightCompare () {
     let randomDino = dinos[Math.floor(Math.random() * dinos.length)];
     let weightRatio = (randomDino.weight / human.weight).toFixed(1);

     if (weightRatio > 1) {
     console.log (`${randomDino.name} weights ${weightRatio} times more than you!`) } 
     else if (weightRatio < 1) {
     console.log (`${randomDino.name} weights ${weightRatio} times less than you!`)
     } else {`Your weight is same as ${randomDino.name} ` }
    }

        // Create Dino Compare Method 2

    function heightCompare () {
        let randomDino = dinos[Math.floor(Math.random() * dinos.length)];
        let heightRatio = (randomDino.height / human.height).toFixed(1);
    
        if (heightRatio > 1) {
        console.log (`${randomDino.name} is ${heightRatio} times taller than you!`) } 
        else if (weightRatio < 1) {
        console.log (`${randomDino.name} is ${heightRatio} times shorter than you!`)
        } else {`Your height is same as ${randomDino.name} ` }  //maybe not height ratio but difference?
    }


        // Create Dino Compare Method 3
    //diet compare
     
    function dietCompare() {
      let randomDino = dinos[Math.floor(Math.random() * dinos.length)];

      if (randomDino.diet == human.diet) {
          console.log (`${randomDino.name} is also a ${human.diet} just like you!`)
      } else {console.log (`${randomDino.name}\'s diet is different than yours. He is a ${randomDino.diet}`)}
    };

    
        // Generate Tiles for each Dino in Array

        function shuffleArray(arr) {
            for (let i = 0; i < arr.length; i++) {
              const j = Math.floor(Math.random() * (i + 1));
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
          }
          
          // put a value in the middle of an array
          function valueMiddleArray(arr, human) {
            arr.splice((arr.length/2), 0, human);
            return arr;
          }


        function TileGenerator() {

            valueMiddleArray(shuffleArray(dinos), human)

            const grid = document.getElementById("grid")

            dinos.forEach(dino =>{
                let tiles = document.createElement("div");
                tiles.className = "grid-item"; 
                let tileprops;
                if(dino.name == 'human'){
                      tileprops = `<h3>${dino.displayName}</h3><img src="images/${(dino.name.toLowerCase())}.png" alt="image of ${dino.name}">`;
                }
                else{
                      tileprops = `<h3>${dino.species}</h3><img src="images/${(dino.species.toLowerCase())}.png" alt="image of ${dino.species}"><p>${dino.fact}</p>`
                }
                tiles.innerHTML = tileprops;
                grid.appendChild(tiles)
            })            }   


    
    // On button click, prepare and display infographic

    const button = document.getElementById('btn')
    
    button.addEventListener("click", function () {
       
        console.log("CLICK!!!");  

        fromForm();
        TileGenerator();
         });
            
    //utilize random comparisons or facts with switch cases
    //new form when button click
    //scroll down to human?
    //change weight and height again
    