// boolean(true/false)
let isOpen: boolean
isOpen = true
isOpen = false

// string ('foo', "foo", `foo`)
//obs: tudo dentro do back-tick é string 
let msg: string
msg = 'foo'
msg = "foo"
msg = `foo ${isOpen}`

//number(int, flot, hexadecimal, binario)
let magicNumber: number
magicNumber = 1
magicNumber = 0xff0
magicNumber = 1.999

// array(type[])
let items: string[]
items = ['foo', 'merlin']

let values: Array<number>
values = [1, 2, 3, 4]

// tuple = array 
let title: [number, string, []]
title = [1, 'a', []]

// enum 
enum colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa)
let whatEver: any
whatEver = 1
whatEver = ['arroz', 1, () => { }]
whatEver = `foo ${colors}`

// void(não retorna nada)
// isso não precisa !!!
const a = (): void => {
    console.log('oi')
}

// isso não precisa !!!
const b = (): number => {
    return 1 + 2;
}

// null | undefined
type anyWay = string | undefined

// never
const errorNerverReturn = () => {
    throw new Error(colors.black)
}

//object
let cart: object;

cart = {
    key: 'guild gerar aqui eras',
    name: 'luccas',
    color: colors.white,
    height: 1.90 
}