class Estoque {
    constructor(_codigo, _descricao, _qtdMin, _qtdEstoque, _valorUnit, _unidadeMedida) {
        this._codigo = _codigo;
        this._descricao = _descricao;
        this._qtdMin = _qtdMin;
        this._qtdEstoque = _qtdEstoque;
        this._valorUnit = _valorUnit;
        this._unidadeMedida = _unidadeMedida;
    }
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
        }
        else {
            return "Disponível";
        }
    }
}
