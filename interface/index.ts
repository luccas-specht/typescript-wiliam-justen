// interface: Usa para criação de obj
// type alias: usa para tipos primitivos

//first step
interface Game {
    readonly title: string;
    description: string;
    genre: string;
    platform: string[];
    year?: number;
    getTitle?: () => void;
}

//second step
interface Dlc extends Game {
    original: Game,
    readonly infos: string
}

//third step
class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    platform: string[];

    //mas e um array?
    constructor(title: string, description: string, genre: string, platform: string[]) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }

}


const theLastOfUs: Game = {
    title: 'The Last Of Us',
    description: 'A game for players top',
    genre: 'Action',
    platform: ['PS3, PS4'],
    year: 2012,
    getTitle: () => {
        console.log(`it's title game: ${theLastOfUs.title}`);
    }
}

const leftBehind: Dlc = {
    title: 'Left Behind',
    description: 'A game for players top',
    genre: 'Action',
    platform: ['PS4'],
    year: 2013,
    original: theLastOfUs,
    infos: 'Original for Plastation'
}


// como é opcional ele não deixa chamar direto pois pode ser undefined, logo deve primeiro
// verificar a existencia desse metodo
if (!!theLastOfUs.getTitle) {
    theLastOfUs.getTitle()
}


console.log(theLastOfUs.platform[0])