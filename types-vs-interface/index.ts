// type alias:

//defition
type GameT = {
    title: string
}

type DLCT = {
    extra: string
}

// intersection
type GameCollectionT = GameT & DLCT & { contents: string };

// implements
class CreateGameT implements GameCollectionT {
    title: 'a';
    extra: 'oi';
    contents: 'hi'
}

// declare function
type getTitleT = (title: string) => void;


// interface:

// definition
interface GameI {
    title: string
}

interface DLCI {
    extra: string
}

// intersection | extend
interface GameCollectionI extends GameI, DLCI { }

// implements
class CreateGameI implements GameCollectionI {
    title: 'a';
    extra: 'b';
}

//declare function 
interface getTitleI {
    (title: string): void
}

// =================== differences =================== //

// types:
// allow declare primitives types
type IDT = string | number;

// may declare typles normaly
type tupleT = [number, number]

// only one declare by scope
// main difference
type JQueryT = { a: string };
type JQueryT = { b: string };


// interface:
interface IDI extends number {
}

// may declare typles normaly
interface tupleI {
    0: false;
    1: true
}

// i can't define a tuple
[2, 9, 8 8] as tupleI

// more one declare
interface JQueryI { a: string };
interface JQueryI { b: string };

const $: JQueryI = {
    a: 'soja',
    b: 'beens'
}