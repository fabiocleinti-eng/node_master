import app from "./src/app/app.js";
import conexao from "./src/app/database/conexao.js";
const port = 3000

// realizando a conexao

conexao.connect((erro)=> {
    if (erro) {
        console.log("Erro na conexão")
    }else{
        console.log("Conexão com sucesso")
        
        app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
});
    }
    
        
})


