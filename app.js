
    // Create Dino Constructor
    function Dino (species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    };
       
        // Create Dino Objects

    const dinoInfo = [
    {
        "species": "Triceratops",
        "weight": 5897,
        "height": 290,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 5400,
        "height": 366,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 4763,
        "height": 135,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 31751,
        "height": 945,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 5262,
        "height": 200,
        "diet": "herbivore",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 7257,
        "height": 150,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 20,
        "height": 51,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.2,
        "height": 23,
        "diet": "herbivore",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }];

    const dinos = dinoInfo.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact));

   
        // Create Human Object

    let human

    function Person (username,usercm,userkg,slctDiet) {
        this.name = 'human'
        this.height = usercm
        this.weight = userkg
        this.diet = slctDiet
        this.displayName = username
    }   
    //Gets values from form, assigns prototype values to human
    function fromForm () {
        let username = document.getElementById('username').value;
        let usercm = document.getElementById('usercm').value;
        let userkg = document.getElementById('userkg').value;
        let diet = document.getElementById('userdiet');
        let slctDiet = diet.options[diet.selectedIndex].text;

        return human = Object.create(new Person (username,usercm,userkg,slctDiet))
    }
    //Shuffles Array
    function shuffleArray(arr) {
        for (let i = 0; i < arr.length; i++) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      
      //Puts a value in the middle of an array
      function valueMiddleArray(arr, human) {
        arr.splice((arr.length/2), 0, human);
        return arr;
      };
    //Generate number 1-4
    function RandNum () {
       return Math.floor(Math.random() * 4) + 1;
    };

    //Generates tiles from with dino and human objects

    function TileGenerator() {

            valueMiddleArray(shuffleArray(dinos), human)

            const grid = document.getElementById("grid") 

            dinos.forEach(dino =>{

            //Weight Compare Method

            function weightCompare() {
            /*     let randomDino = dinos[Math.floor(Math.random() * dinos.length)]; */ //placeholder to test function

                    let weightRatio = (dino.weight / human.weight).toFixed(1);
               
                    if (weightRatio > 1) {
                    return (`${dino.species} weights ${weightRatio} times more than you!`) } 
                    else if (weightRatio < 1) {
                    return (`${dino.species} weights ${weightRatio} times less than you!`)
                    } else return `Your weight is same as ${dino.species} `
                   };
               
                   //Height compare method
               
            function heightCompare () {

                       let heightRatio = (dino.height / human.height).toFixed(1);
                   
                       if (heightRatio > 1) {
                       return (`${dino.species} is ${heightRatio} times taller than you!`)}
                       else if (heightRatio < 1) {
                        return (`${dino.species} is ${heightRatio} times shorter than you!`)
                       } else return `Your height is same as ${dino.species} `   
                   }
               
               
                   //Diet compare method
                    
            function dietCompare() {
               
                     if (dino.diet == human.diet) {
                         return (`${dino.species} is also a ${human.diet} just like you!`)
                     } else {return (`${dino.species}\'s diet is different than yours. He is a ${dino.diet}`)}
                   };
               

                   //Fact Generator

            function dinoFact() {
                           return (`${dino.fact}`)
                       };
               
                    //Randomly chooses one method
             function InfoGen () {
                let info;
                switch (RandNum()) {
                    case 1:
                        info = weightCompare();
                        break;
                    case 2:
                        info = heightCompare();
                        break;
                    case 3:
                        info = dietCompare();
                        break;
                    case 4:
                        info = dinoFact();
                };
                return info
            };



                let tiles = document.createElement("div");
                tiles.className = "grid-item"; 
                let tileprops;


                if(dino.name == 'human'){
                      tileprops = `<h3>${dino.displayName}</h3><img src="images/${(dino.name.toLowerCase())}.png" alt="image of ${dino.name}">`;

                }

                else if (dino.species == "Pigeon"){

                    tileprops = `<h3>${dino.species}</h3><img src="images/${(dino.species.toLowerCase())}.png" alt="image of ${dino.species}"><p>${dino.fact}</p>`

                }

                else{
                    let randomInfo = InfoGen();
                    tileprops = `<h3>${dino.species}</h3><img src="images/${(dino.species.toLowerCase())}.png" alt="image of ${dino.species}"><p>${randomInfo}</p>`
             
                    }
                tiles.innerHTML = tileprops;
                grid.appendChild(tiles)
                removeForm();
            });           
        };   



    //Scrolls down to human tile
    function scrollDown () {
        window.scrollTo(0, 665)};

    //Removes human info entry form 
    const form = document.getElementById("dino-compare")   
    function removeForm() {
            return form.style.display = "none";
        }
    
    //Checks if all info is entered, generates tiles
    function checkInfo () {
            if (human.weight == "" || human.weight == "" || human.displayName == "" ) {
                alert("Please enter all information")
            } else {
                TileGenerator();
                window.setTimeout(scrollDown, 100);} }
        

    //On button click get info, remove form, generate tiles
    const button = document.getElementById('btn')    
    button.addEventListener("click", function () {
        console.log("CLICK!!!");  
            fromForm();
            checkInfo(); 
         });
            

    //change weight and height again
