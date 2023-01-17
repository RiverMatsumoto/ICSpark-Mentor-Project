// All animals

elephant = {
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

giraffe = {
    name: "Giraffe",
    numLegs: 4,
    hasTail: true,
    weight: 2000,
    height: "18\"0'",
    habitat: "Plains",
    funFact: "Has a blue tongue",
    imageLink: "https://i.pinimg.com/originals/f8/b9/9e/f8b99eda710776f5deb5171b4df3804b.png",

    MakeSound() {
        alert("MROOOO, MROOOO");
    }
}

monkey = {
    name: "Monkey",
    numLegs: 2,
    hasTail: true,
    weight: 200,
    height: "4\"8'",
    habitat: "Jungle",
    funFact: "Sleeps while sitting in trees",
    imageLink: "https://i.pinimg.com/originals/cf/f0/f4/cff0f443c5f794a54e105e11e133b6e3.png",

    MakeSound() {
        alert("OO OO AH AH");
    }
}

// create list or array to store the animals
let animalList = [];
animalList.push(elephant);
animalList.push(giraffe);
animalList.push(monkey);
let currentAnimalIndex = 0;
let currentAnimal = animalList[currentAnimalIndex];

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

UpdateAnimalData();

function MakeSound() {
    currentAnimal.MakeSound();
}

function MoveLeft() {
    if (currentAnimalIndex > 0) {
        currentAnimalIndex--;
        UpdateAnimalData();
    }
}

function MoveRight() {
    if (currentAnimalIndex + 1 < animalList.length) {
        currentAnimalIndex++;
        UpdateAnimalData();
    }
}

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