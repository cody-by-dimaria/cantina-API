const express = require("express")
const app = express()

app.use(express.json())


const pratos = [
    { id: 1,  nome: "Pão de pizza", descricao: "pão com queijo derretido e tomate" , preco: 7.00},
    { id: 2, nome: "bauru", descricao: "Massa de presunto com derretido" , preco: 7.00},
]

let proximoId = 3

app.get("/cantina", (req, res) => {
    res.json(pratos)
})


app.post("/cantina" , (req , res) => {
    const {nome,descricao,preco} = req.body

    if(!nome || !descricao || !preco ){
        return res.status(400).json({error: "Nome preço e descrição são o obrigatórios"})
    }

    const novoPrato = {
        id: proximoId,
        nome,
        descricao,
        preco 
    }

   pratos.push(novoPrato)
   proximoId++
   res.status(201).json(novoPrato)
})


app.listen(3000, () => console.log("API rodando em localhost:3000"))
