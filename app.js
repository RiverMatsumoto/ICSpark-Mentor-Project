elephant1 = {
    name: "Pumpkin",
    weight: 2000,

    MakeSound() {
        alert("HEHRHHEEAHRHEHA");
    }
}

let animalList = [];
animalList.push(elephant1);
let currentAnimal = animalList[0];

makeSoundButton = document.getElementById("MakeSound");
makeSoundButton.onclick = MakeSound;

function MakeSound() {
    currentAnimal.MakeSound();
}