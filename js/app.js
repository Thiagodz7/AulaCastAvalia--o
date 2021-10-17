var Jogos = /** @class */ (function () {
    function Jogos(nomeJogo, valorBase, qtdDlc) {
        if (valorBase === void 0) { valorBase = 300; }
        this.nomeJogo = nomeJogo;
        this.valorBase = valorBase;
        this.qtdDlc = qtdDlc;
    }
    Jogos.prototype.adicionaDlc = function () {
        this.valorBase = this.valorBase * this.qtdDlc / 2;
        return this.valorBase;
    };
    return Jogos;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, sexo, saldo) {
        if (idade === void 0) { idade = 18; }
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.saldo = saldo;
    }
    Cliente.prototype.adicionarSaldo = function (valor) {
        this.saldo = valor;
        return this.saldo;
    };
    Cliente.prototype.comprar = function (obj) {
        var compra = false;
        if (this.saldo >= obj.valorBase) {
            return compra = true;
        }
        else {
            compra = false;
            console.log('Saldo Insuficiente');
        }
    };
    return Cliente;
}());
var jogo1 = new Jogos('Fallout 6', 200, 1);
var cliente1 = new Cliente('Thiago R', 20, 'masculino', 200);
cliente1.comprar(jogo1);
