//Сегрегация интерфейса


// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     walk() {
//         console.log(`${this.name} умеет ходить`)
//     }

//     swim() {
//         console.log(`${this.name} умеет плавать`)
//     }

//     fly() {
//         console.log(`${this.name} умеет летать`)
//     }
// }

// class Dog extends Animal{
//     fly() {
//         return null
//     }
// }

// class Eagle extends Animal{
//     swim() {
//         return null
//     }
// }

// class Whale extends Animal{
//     walk() {
//         return null
//     }
//     fly() {
//         return null
//     }
// }

// const dog = new Dog('Рэкс');

// dog.walk();
// dog.swim();
// dog.fly();

// const eagle = new Eagle('Орел');

// eagle.walk();
// eagle.swim();
// eagle.fly();

// const whale = new Whale('Вася');

// whale.walk();
// whale.swim();
// whale.fly();


//мы не описываем базовые методы в классе энимал

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`)
    }
}

const flyier = {
    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}


Object.assign(Dog.prototype, swimmer, walker);//обджект.ассайн - добавляет таргету свойства других обьектов
Object.assign(Eagle.prototype, flyier, walker);
Object.assign(Whale.prototype, swimmer);



const dog = new Dog('Рэкс');

dog.walk();
dog.swim();

const eagle = new Eagle('Орел');

eagle.walk();
eagle.fly();

const whale = new Whale('Вася');

whale.swim();