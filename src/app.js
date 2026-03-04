import express from "express";
import conexao from "./app/database/conexao.js";
import SelecaoController from "./app/controllers/SelecaoController.js";


const app = express();

app.use(express.json());



app.get("/selecoes", SelecaoController.index);

//     const sql = "SELECT * FROM dbselecao.dbcopa";
//     conexao.query(sql, (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     })
// });


app.get ('/selecoes', SelecaoController.show) 

    // const id = req.params.id
    // const sql = "SELECT * FROM dbselecao.dbcopa WHERE id=?;"
    // conexao.query(sql, id, ( erro, resultados)=>{
    //     if (erro) {
    //         console.log(erro)
    //         // TODO: status 404 error
    //     }else{
    //         res.status(200).json(resultados)
    //     }
    // })
//});

app.post("/selecoes", SelecaoController.store);
//     const selecao = req.body;
//     const sql = "INSERT INTO dbselecao.dbcopa SET ?;";
//     conexao.query(sql, selecao, (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(201).json(resultados);
//         }
//     });
// });

app.delete("/selecoes/:id", SelecaoController.delete);
//     const id = req.params.id;
//     const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?;";
//     conexao.query(sql, id, (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     });
// });

app.put("/selecoes/:id", SelecaoController.update);
//     const id = req.params.id;
//     const selecao = req.body;
//     const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id=?;";
//     conexao.query(sql, [selecao, id], (erro, resultados) => {
//         if (erro) {
//             console.log(erro);
//         } else {
//             res.status(200).json(resultados);
//         }
//     });
// });

export default app;
