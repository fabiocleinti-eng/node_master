class selecaoController {
    //Listar tudo
        index (){
            const sql = "SELECT * FROM dbselecao.dbcopa";
            conexao.query(sql, (erro, resultados) => {
                if (erro) {
                    console.log(erro);
                } else {
                    res.status(200).json(resultados);
                }
            })
        }

        //Listar por id
        show(){}

        // Criar dados
        store(){}

        //Atualizar
        update(){}

        //Remover dados
        delete(){}
}
//Padrão singleton <-- (pesquisar sobre isso )

export default new selecaoController()