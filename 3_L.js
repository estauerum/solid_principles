//Принцип Лисков
class Person {
}

class Member extends Person {
    access() {
        console.log('у тебя есть доступ')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFront() {}
}

class Backend extends Member {
    canCreateBack() {}
}

class PersonDiffernCompany extends Guest {
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
//openSecretDoor(new PersonDiffernCompany())// there should be member

