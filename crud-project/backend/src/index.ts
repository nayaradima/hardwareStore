import express from "express";
import cors from "cors";
import routerProdutos from "./routes/produtos";


const app = express();
const porta = 4000;

// Needs to use 'cors' when you're running differents app. in the same machine. 
// Client and Server being used in the same PC
app.use(cors());
// O express nao ler o body da req, tem que add um middle!
app.use(express.urlencoded({extended:true}))
// middleware that allows the react to get json
app.use(express.json());

app.use("/produtos",routerProdutos);



app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
