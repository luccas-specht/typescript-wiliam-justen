// interface: Usa para criação de obj
// type alias: usa para tipos primitivos
//third step
var CreateGame = /** @class */ (function () {
    //mas e um array?
    function CreateGame(title, description, genre, platform) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }
    return CreateGame;
}());
var theLastOfUs = {
    title: 'The Last Of Us',
    description: 'A game for players top',
    genre: 'Action',
    platform: ['PS3, PS4'],
    year: 2012,
    getTitle: function () {
        console.log("it's title game: " + theLastOfUs.title);
    }
};
var leftBehind = {
    title: 'Left Behind',
    description: 'A game for players top',
    genre: 'Action',
    platform: ['PS4'],
    year: 2013,
    original: theLastOfUs,
    infos: 'Original for Plastation'
};
// como é opcional ele não deixa chamar direto pois pode ser undefined, logo deve primeiro
// verificar a existencia desse metodo
if (!!theLastOfUs.getTitle) {
    theLastOfUs.getTitle();
}
console.log(theLastOfUs.platform[0]);
