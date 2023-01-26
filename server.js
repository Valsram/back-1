import  Express  from 'express';
import { TicketManager } from './ticketManager.js';
const app = express()


app.get('/eventos',async(req,res)=>{
    const {limit}= req.query
    res.json({eventos})
})

const eventos = await TicketManager.getEventos(limit || 'max')
res.json({eventos})


app.get('/eventos/: idEvento' ,async(req,res)=>{
    const {idEvento} = req.params
    const evento =  await TicketManager.getEventById(idEvento)
    res.json({evento})
})


const PORT =  8080
app.listen(PORT,()=>{
    console.log('escuchando al ${port}')
})