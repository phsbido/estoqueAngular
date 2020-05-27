class Estoques {
    constructor() {
        this._estoques = [];
    }
    adiciona(estoque) {
        this._estoques.push(estoque);
    }
    retornaArray() {
        return [].concat(this._estoques);
    }
}
