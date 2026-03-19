import 'dotenv/config'
import express from "express"
import { PrismaClient } from '@prisma/client';
import cors from "cors"
const prisma = new PrismaClient();

    const app = express()
    app.use(express.json())
    app.use(cors())
    
        app.post("/usuarios", async(req, res) =>{
            await prisma.user.create({
                data:{
                    id: req.body.id, 
                    email: req.body.email,
                    name: req.body.name,
                    age: req.body.age
                }
            })
            res.status(200).send("Usuario criado com sucesso!!")
        })

    app.get("/usuarios", async (req, res)=>{
        const users = await prisma.user.findMany()
        res.status(201).send(users)
    })

    app.put("/usuarios/:id", async (req, res)=>{
        await prisma.user.update({
            where:{
                id: req.params.id
            },
            data:{
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            }
        })
        res.status(203).send("usuario editado com sucesso")
    })

    app.delete("/usuarios/:id", async(req, res)=>{
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(204).send("usuario deletado com sucesso!!")
    })


    app.listen(3000, ()=>{
        console.log("Servidor rodando em http://localhost:3000")
    })



    /*import express from "express"

    const app = express()
    app.use(express.json())

    app.get("/usuarios", async (req, res)=>{
        res.status(200).send("parece que deu bom")
    })

    app.post("/usuarios", async(req, res) =>{
        res.status(200).send("parece que ta funcionando")
            console.log()
    })

    app.listen(3000)
*/