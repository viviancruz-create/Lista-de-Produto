import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  descricao_produto? : string;
  valor_unitario? : number;
  listaItens: Item[] = []

  addItem(){
    //Intancia da classe item passando os parâmetros do construtor
    //let item = new Item(this.descricao_produto, this.valor_unitario)
   //Instãncia da classe item ( criando o objeto item)

    let item = new Item();
    item.idProduto = this.listaItens.length + 1
    item.descricaoProduto = this.descricao_produto;
    item.valorUnitario = this.valor_unitario;

    //Adicionando objeto item ao array listaItens
    this.listaItens.push(item)

    //Limpando as propriedade da classe
    this.descricao_produto = ''
    this.valor_unitario = 0.0

  }
  limparTudo(){
    this.listaItens = []
  }
}
