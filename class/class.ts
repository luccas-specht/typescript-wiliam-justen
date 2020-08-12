enum sex {
    masc = 'man',
    female = 'woman'
}

class UserAccount {
    name: string
    age: number
    sex?: sex

    constructor(name: string, age: number, sex?: sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

const luccas = new UserAccount('ppt', 19);
const enriconi = new UserAccount('enriconi', 18, sex.masc);

console.log(luccas)
console.log(enriconi.sex)

