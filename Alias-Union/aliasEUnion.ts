// type alias
type id = number | string
type description = string
type platform = 'windows' | 'ubuntu'

const a = (id: id, description: description) => {
    console.log(`arroz com ${id}, description com ${description}`)
}


const merlin = (platform: platform )=> {
    return platform
   
}

merlin('ubuntu')