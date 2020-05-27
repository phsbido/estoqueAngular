class EstoquesView extends View<Estoques> {

    template(model: Estoques): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>DESCRIÇÃO</th>
                        <th>QTD. MÍN</th>
                        <th>QTD ATUAL</th>
                        <th>SITUAÇÃO</th>
                        <th>VALOR UNIT.</th>
                        <th>VALOR TOTAL</th>
                        <!--<th>AÇÕES</th>-->
                    </tr>
                </thead>
    
                <tbody>
                ${model.retornaArray().map(estoque =>
            `<tr>
                        <td>${estoque.codigo}</td>
                        <td>${estoque.descricao.toUpperCase()}</td>
                        <td>${estoque.qtdMin + " " + estoque.unidadeMedida}</td>
                        <td>${estoque.qtdEstoque + " " + estoque.unidadeMedida}</td>
                        <td>${estoque.situacao.toUpperCase()}</td>
                        <td>${"R$" + estoque.valorUnit.toFixed(2).replace(".", ",")}</td>
                        <td>${"R$" + estoque.valorTotal.toFixed(2).replace(".", ",")}</td>
                        <!--<td><button class="btn btn-danger" style="width: -webkit-fill-available;" onclick="removerLinha()">Excluir</button></td>-->
                    </tr>                        
                    `).join('')} 
                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `
    }

}