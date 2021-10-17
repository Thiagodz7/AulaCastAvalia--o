class Jogos{
    nomeJogo: string;
    valorBase: number;
    qtdDlc: number;

    constructor(nomeJogo,valorBase = 300,qtdDlc){
        this.nomeJogo = nomeJogo;
        this.valorBase = valorBase;
        this.qtdDlc = qtdDlc;
    }

    adicionaDlc(){
        this.valorBase = this.valorBase * this.qtdDlc / 2;
        return this.valorBase;
    }
}

class Cliente{
    nome: string;
    idade: number;
    sexo: string;
    saldo: number;

    constructor(nome,idade = 18,sexo,saldo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.saldo = saldo;
    }

    adicionarSaldo(valor){
        this.saldo = valor;
        return this.saldo;
    }

    comprar(obj: { valorBase: number}){
        let compra = false;
        if(this.saldo>=obj.valorBase){
            return compra = true;
        }else{
            compra = false;
            console.log('Saldo Insuficiente')
        }
    }
}

let jogo1 = new Jogos('Fallout 6',200,1)
let cliente1 = new Cliente('Thiago R',20,'masculino',200)

cliente1.comprar(jogo1)