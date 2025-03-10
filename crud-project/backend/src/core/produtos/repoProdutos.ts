import Produto from "./produto";

export default class RepositorioProdutos {
    itens: Produto[] = [new Produto("HD Samsung",400.00),
                        new Produto("Mouse",49.49),
                        new Produto("Teclado",109.99)]

    obterTodos(){
        return this.itens;
    }

    novo(nome:string, preco:number){
        const novoProduto = new Produto(nome,preco);
        this.itens.push(novoProduto);
    }

    obterPorCodigo(codigo: string){
        const produto = this.itens.find((produto)=>produto.codigo === codigo);
        return produto;
    }



}