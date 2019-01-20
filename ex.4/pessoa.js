//Usando agora o sistema de módulos do ecma script 2015
export default class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }
}
