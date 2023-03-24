# ICSpark-Mentor-Project

Go to this link to view the final example project: https://rivermatsumoto.github.io/ICSpark-Mentor-Project/

# TEMPLATE CODE (IMPORTANT)

GO TO THIS LINK FOR THE TEMPLATE FILES TO USE!: https://github.com/RiverMatsumoto/ICSpark-Mentor-Project/tree/template

HTML template: https://github.com/RiverMatsumoto/ICSpark-Mentor-Project/blob/template/index.html
CSS template: https://github.com/RiverMatsumoto/ICSpark-Mentor-Project/blob/template/style.css
Javascript template (normal): 
Javascript template (harder): https://github.com/RiverMatsumoto/ICSpark-Mentor-Project/blob/template/app.js

## Description

Create animal exhibits for your zoo! The idea of the project is to create animals for your zoo such that you can add as many animals as you want.

In this project you will practice using Javascript objects, data types, and a little bit of arrays. There is also some extra practice with using events and hooking up the buttons on the webpage to javascript functions.

## Difficulty

Intermediate (Copy the code for step 3)
Advanced (Write the code on your own for step 3)

## Prerequisites

* Javascript: Functions, Types, Objects
* HTML/DOM
* Events (buttons -> call function)

# Instructions

The HTML and CSS are provided for you because the focus of the project is on the Javascript. A little bit of javascript will be provided for you. This is so that you can focus more on the objects, data types, and arrays.

### 1a. What is plan? How do we start?

Remember, the goal of the project is to create a zoo exhibit where you can add as many animals as you want.

We will be using **arrays** to store our animals. Then we will have an integer **currentAnimalIndex** as the cursor or index to keep track of what the current animal should be displayed on the screen. Below is an example of the animals that might be in your zoo (in the array) and the currentAnimalIndex is the integer that keeps track of currentAnimal to be displayed

```js
// This is not real code, but it's just to represent the animal objects
animalList = [<giraffeObject>, <rhinoObject>, <tigerObject>, ...];
currentAnimalIndex = 1;
```

Remember, arrays start from 0, so currentAnimalIndex of 1 points to the rhinoObject when you access it like this:

```js
// This gives back the rhinoObject
animalList[currentAnimalIndex];
```

Now when we increase currentAnimalIndex by 1, is moves the cursor to the right.

```js
currentAnimalIndex++; // now it's 2
// This gives back the tigerObject
animalList[currentAnimalIndex];
```

We can use this to navigate the exhibit.

### 1b. Setting up the variables

After the functions, follow the instructions and write the code.

1. Create an array called "animalList"
   1. `let animalList = []`
2. Create a variable called "currentAnimalIndex" and initialize it to equal 0
   1. `let currentAnimalIndex = 0`
3. Create a variable called "currentAnimal" and initialize it to the first element of the array. This variable will be used to keep track of the current animal.
   1. `let currentAnimal = animalList[currentAnimalIndex]`
4. Add the already created elephant object to the end of the array using it's "push" function
   1. `animalList.push(elephant)`

### 2. Adding animals to the array

You already added the elephant to the array earlier in the setup, but now you will add your own animals to the array.

Remember what objects are? Objects can contain properties and methods. Here our animal will contain properties such as its name, weight, number of legs, whether it has a tail, an image, etc. and it will also contain a method called `MakeSound()`. Remember methods are the same as functions, except they are attached to objects

You need to do the following steps to add the animal to the array:

1. Copy and paste the code involved with creating the elephant object

```js
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
```

2. Rename the variable to the name of your animal
3. Replace all the information in the curly braces to match your animal
   1. Note that you need to find an image of your animal on google, right click the image, then press "copy image address" then paste it into the **imageLink** property of your animal
   2. You can replace the sound of your animal in the MakeSound function to whatever you want
4. Add your new animal to the array
   1. After the line where you called `animalList.push(elephant)` call it again, but replace elephant with the name of the variable of the animal you created.
5. Call the `UpdateAnimalData` function. This is just so that when the webpage loads, the elephant's data will show up

Congratulations! You just added a new animal exhibit to your zoo! 

Now add about 3 to 5 more animals to the animalList array by repeating the steps above and then we will go over how to navigate each exhibit.

### 3a. Navigating the exhibit (Normal Version)

If you would like a challenge to practice your javascript skills you can practice doing it on your own at the harder version step 3b

I have already written some of the functions that we will call when the buttons are pressed. All we need is a way to move to the left and right of the array to display a different animal, and connect the "Play Animal Noise" button to the MakeSound function on the current animal being displayed.

1. Get a reference to the "move-left" button
   1. `let moveLeftButton = document.getElementById("move-left");`
2. Get a reference to the "move-right" button
   1. `let moveRightButton = document.getElementById("move-right");`
3. Get a reference to the "play-noise" button
   1. `let playAnimalNoiseButton = document.getElementById("play-noise");`
4. Hook up the onclick event of the button to the corresponding functions:
   1. move-left -> MoveLeft()
   2. move-right -> MoveRight()
   3. play-noise -> MakeSound()
   4. Example: `moveLeftButton.onclick = MoveLeft;`

### 3b. Navigating the exhibit (Harder Version)

I have already written some of the functions that we will call when the buttons are pressed. All we need is a way to move to the left and right of the array to display a different animal, and connect the "Play Animal Noise" button to the MakeSound function on the current animal being displayed.

**You must write the code starting anywhere after where the animal objects are created from step 2**
**This is important because if we try to display animals before they exist, the page will break!** 

1. Get a reference to the "move-left" button
2. Get a reference to the "move-right" button
3. Get a reference to the "play-noise" button
4. Hook up the onclick event of the button to the corresponding functions:
   1. move-left -> MoveLeft()
   2. move-right -> MoveRight()
   3. play-noise -> MakeSound()
   4. Example: `moveLeftButton.onclick = MoveLeft;`

I highly encourage you try to read the code in the functions MoveLeft() and MoveRight() that are already there so that you can better understand how it moves the cursor and then updates the information about the animal on the webpage.

Great! Now we set up our navigation and we got our exhibits going! That is pretty much it to setting up the zoo exhibit.

## Stretch Goals

There are a lot of new features you could add on your own if you have extra time or would like some new ideas on how to build upon this project!

1. Add a new property to the animals to display such as "Can Fly:" or "Animal Kingdom"
   1. This requires editing HTML, CSS, and JS files
2. Add a new functionality to your animal besides playing their noise.
   1. This requires adding a button to the HTML and then hooking up that button to a new function on your animal similar to how it is set up currently with the play noise button.
3. Play around with the css and decorate it however you want!