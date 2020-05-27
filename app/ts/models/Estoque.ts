class Estoque {

    constructor(
        private _codigo: number,
        private _descricao: string,
        private _qtdMin: number,
        private _qtdEstoque: number,
        private _valorUnit: number,
        private _unidadeMedida: string
    ) { }

    get codigo() {
        return this._codigo;
    }

    get descricao() {
        return this._descricao;
    }

    get qtdMin() {
        return this._qtdMin;
    }

    get qtdEstoque() {
        return this._qtdEstoque;
    }

    get valorUnit() {
        return this._valorUnit;
    }

    get unidadeMedida() {
        return this._unidadeMedida.toUpperCase();
    }

    get valorTotal() {
        return this._valorUnit * this._qtdEstoque;
    }

    get situacao() {
        if (this._qtdEstoque < this._qtdMin) {
            return "Em falta";
        } else {
            return "Disponível";
        }
    }

}