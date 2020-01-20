class Animal{
    constructor(name,sounds,eat){
        this.name = name;
    
    }

    eat(){
        return this.name + " eats"
    }
}
    class Cat extends Animal{
        sounds(){
            return "Cat meows"
    }
}



class Dog extends Animal{
    sounds(){
        return "Dog barks"
    }
}


class Home{
    constructor(){
        this.array = []
        this.sounds = []
    }
    adoptPet(animal){
        this.array.push(animal)
        return ''
    }

    makeAllSounds(){
        for (let i =0; i < this.array.length; i++){
            this.sounds.push(this.array[i].sounds())
        }
        return this.sounds.join(" ")
    }
}

let home = new Home();
let dog1 = new Dog();
let dog2 = new Dog();
let cat = new Cat();
let dog = new Dog()
home.adoptPet(dog1)
home.adoptPet(dog2)
home.adoptPet(cat)
home.makeAllSounds()
cat.eat()
cat.sounds()
dog.eat()
dog.sounds()