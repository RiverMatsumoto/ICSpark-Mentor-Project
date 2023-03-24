
// Example of an elephant
let elephant = {
    name: "Elephant",
    numLegs: 4,
    hasTail: true,
    weight: 8000,
    height: "10\"0'",
    habitat: "Plains",
    funFact: "World's largest land animal",
    imageLink: "https://freepngimg.com/thumb/elephant/31379-4-elephant-transparent-background.png",

    MakeSound() {
        alert("HERRAAAAA, HERRRAAAAAA");
    }
}


// Add listeners to the move left and right buttons
moveLeftButton = document.getElementById("move-left");
moveLeftButton.onclick = MoveLeft;

moveRightButton = document.getElementById("move-right");
moveRightButton.onclick = MoveRight;

// Add listener to the play-noise button
makeSoundButton = document.getElementById("play-noise");
makeSoundButton.onclick = MakeSound;

// Get references to HTML tags:
animalImage = document.getElementById("animal-image");
animalName = document.getElementById("animal-name");
numLegs = document.getElementById("animal-legs");
hasTail = document.getElementById("animal-has-tail");
weight = document.getElementById("animal-weight");
height = document.getElementById("animal-height");
habitat = document.getElementById("animal-habitat");
funFact = document.getElementById("animal-fun-fact");

// This function calls the "MakeSound" function that the animal has
function MakeSound() {
    currentAnimal.MakeSound();
}

// This function moves the current animal "cursor" or "index" to the left
function MoveLeft() {
    if (currentAnimalIndex > 0) {
        currentAnimalIndex--;
        UpdateAnimalData();
    }
}

// This function moves the current animal "cursor" or "index" to the right
function MoveRight() {
    if (currentAnimalIndex + 1 < animalList.length) {
        currentAnimalIndex++;
        UpdateAnimalData();
    }
}

// This function updates the animal data on the Document Object Model (DOM) aka the webpage
function UpdateAnimalData() {
    currentAnimal = animalList[currentAnimalIndex];
    animalImage.src = currentAnimal.imageLink;
    animalName.innerText = currentAnimal.name;
    numLegs.innerText = currentAnimal.numLegs;
    hasTail.innerText = currentAnimal.hasTail;
    weight.innerText = currentAnimal.weight;
    height.innerText = currentAnimal.height;
    habitat.innerText = currentAnimal.habitat;
    funFact.innerText = currentAnimal.funFact;
}