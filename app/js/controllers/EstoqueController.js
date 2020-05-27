class EstoqueController {
    constructor() {
        this._estoques = new Estoques();
        this._estoquesView = new EstoquesView('#estoquesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputCodigo = $('#codigo');
        this._inputDescricao = $('#descricao');
        this._inputQtdMin = $('#qtdMin');
        this._inputQtdEstoque = $('#qtdEstoque');
        this._inputUnidadeMedida = $('#unMedida');
        this._inputValorUnit = $('#valorUnit');
        this._estoquesView.update(this._estoques);
    }
    adiciona(event) {
        event.preventDefault();
        const estoque = new Estoque(parseInt(this._inputCodigo.val()), this._inputDescricao.val(), parseInt(this._inputQtdMin.val()), parseInt(this._inputQtdEstoque.val()), parseFloat(this._inputValorUnit.val()), this._inputUnidadeMedida.val());
        try {
            this._estoques.adiciona(estoque);
            this._estoquesView.update(this._estoques);
        }
        catch (error) {
            this._mensagemView.update("Erro ao adicionar o estoque.");
        }
        this._mensagemView.update("Estoque adicionado com sucesso.");
        this.limpaCampos();
    }
    limpaCampos() {
        $('#codigo').val('').focus();
        $('#descricao').val('');
        $('#qtdMin').val('');
        $('#qtdEstoque').val('');
        $('#unMedida').val('');
        $('#valorUnit').val('');
    }
}
