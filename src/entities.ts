//No início do projeto, pense apenas nos elementos básicos do jogo. Existem personagens e monstros. Ambos possuem características como nome, vida, ataque e defesa. Nesse momento, o foco é aprender o conceito mais importante da POO: classes e objetos.

class Entity{
    
    private name:string;
    
    public life:number;
    public attack:number;
    public defense:number;

    
    constructor(
        name:string = "Steve",
        life:number = 100,
        attack:number = 5,
        defense:number = 3,
    ){
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }

    public getName():string{
        return this.name;
    }
}

//import Entity from "./Entities";
export default class Human {
    private entity: Entity;
    private items:string[];

    constructor(name:string, items:string[] = []){
        this.entity = new Entity(
            name,
            100,
            10,
            5,
        );
        this.items = items;
    }

}

const a = new Human("joao");

console.log(a)