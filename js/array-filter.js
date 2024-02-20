const nomes = ["Bruno", "Maria", "Ana"]

const copia = nomes.filter(nome => {
    if(nome == "Bruno"){
        return true
    }else {
        return false
    }
})

console.log(copia)

