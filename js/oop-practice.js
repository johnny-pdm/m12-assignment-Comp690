// STEP 1

function Cat() {}

// STEP 2

const Dog = function () {};

// STEP 3

function Animal() {
  console.log(`The Animal has been created`);
}

const animal = new Animal();

// STEP 4

function Animal2(mgs) {
  console.log(mgs);
}

const animal2 = new Animal2("The Animal2 has been created");

// STEP 5

function Animal3(animal) {
  this.animal = animal || "dog";
  this.breed = "lab";
  this.color = "green";
  this.age = 13;
  this.sound = "bark";

  this.speak = function() {
    if(this.animal == "dog") {
        console.log(`The ${ this.color } dog is barking!`);
    }
    if(this.animal == "cat") {
        console.log(`The ${ this.color } cat is meowing!`);
    }
  }

}

const animal3 = new Animal3();

for (const key in animal3) {
    console.log(key);
}

// STEP 6



// STEP 7

const animalSpeak = new Animal3('cat');

animalSpeak.speak();

// STEP 8

function AnimalPrivate(animalArg) {
    let animal = animalArg || "dog";
    let breed = "lab";
    let color = "green";
    let age = 13;
    let sound = "bark";

    const checkType = function() {
        if(animal == "dog" || animal == "cat") {
            return animal;
        }
    }

    this.speak = function() {
        let publicAnimal = checkType();
        console.log(`This ${ publicAnimal } has made a noise!`);
    }
}

const animalPrivate = new AnimalPrivate('cat');

animalPrivate.speak();

// STEP 9

String.prototype.findWords = function(word) {

    word = word.toLocaleLowerCase();
    let counter = 0;
    let _paragraph = this.valueOf().toLocaleLowerCase().split(' ');
    _paragraph.forEach( currentWord => {
        if(currentWord == word){
            counter++;
        }
    });
    
    window.alert(`The word ${ word } has been found ${ counter }`);
}

let paragraph = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog";

paragraph.findWords('fox');

