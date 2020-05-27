class EstoqueController {

    private _inputCodigo: JQuery;
    private _inputDescricao: JQuery;
    private _inputQtdMin: JQuery;
    private _inputQtdEstoque: JQuery;
    private _inputUnidadeMedida: JQuery;
    private _inputValorUnit: JQuery;
    private _estoques = new Estoques();
    private _estoquesView = new EstoquesView('#estoquesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputCodigo = $('#codigo');
        this._inputDescricao = $('#descricao');
        this._inputQtdMin = $('#qtdMin');
        this._inputQtdEstoque = $('#qtdEstoque');
        this._inputUnidadeMedida = $('#unMedida');
        this._inputValorUnit = $('#valorUnit');
        this._estoquesView.update(this._estoques);
    }

    adiciona(event: Event) {
        event.preventDefault();
        const estoque = new Estoque(
            parseInt(this._inputCodigo.val()),
            this._inputDescricao.val(),
            parseInt(this._inputQtdMin.val()),
            parseInt(this._inputQtdEstoque.val()),
            parseFloat(this._inputValorUnit.val()),
            this._inputUnidadeMedida.val()
        );
        try {
            this._estoques.adiciona(estoque);
            this._estoquesView.update(this._estoques);
        } catch (error) {
            this._mensagemView.update("Erro ao adicionar o estoque.");
        }
        this._mensagemView.update("Estoque adicionado com sucesso.");
        this.limpaCampos();
    }

    limpaCampos(): void {
        $('#codigo').val('').focus();
        $('#descricao').val('');
        $('#qtdMin').val('');
        $('#qtdEstoque').val('');
        $('#unMedida').val('');
        $('#valorUnit').val('');
    }

    /*removerLinha(): void {
        alert("Excluindo estoque...");
        console.log("a");

    }
    */
}