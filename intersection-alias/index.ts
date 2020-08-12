type AccountInfo = {
    id: number,
    name: string,
    email: string,
    height?: number,
    wight?: number,
    years?: number
}

type CharacterInfo = {
    nickName: string,
    level: number
}

type PlayerInfo = CharacterInfo & AccountInfo

const accout: AccountInfo = {
    id: 1,
    name: 'jose',
    email: 'lukinhas@gmail.com'
}

const character: CharacterInfo = {
    nickName: 'merlin o mago',
    level: 19
}

const charactera: PlayerInfo = {
    id: 1,
    name: 'jose',
    email: 'lukinhas@gmail.com',
    nickName: 'merlin o mago',
    level: 19   
}

