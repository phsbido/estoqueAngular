class Estoques {

    private _estoques: Estoque[] = [];

    adiciona(estoque: Estoque) {
        this._estoques.push(estoque);
    }

    retornaArray(): Estoque[] {
        return [].concat(this._estoques);
    }

}