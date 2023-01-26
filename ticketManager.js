import fs from 'fs'

export class TicketManager {
    #precioBaseDeGanancia = 0.15
}
    constructor(path) {
        this.path = path
    }

 async getEventos(limit) {
        if (fs.existsSync(this.path)) {
            const eventos = await fs.promises.readFile(this.path, "utf-8")
            if(limit==='max'){
            return JSON.parse(eventos)
        } else {
            return JSON.parse(eventos).slice(0,limit)
            }
    }
async getEventoById(idEvento) {
        const eventos = await this.getEventos()
    }
    const evento = eventos.find((e) => e.id === parseInt(idEvento))
    if (evento) {
        return evento
    } else{
        return "evento no existe"
    }

async agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
        id: this.#generarId(),
        nombre,
        lugar,
        precio: precio + this.#precioBaseDeGanancia,
        capacidad,
        fecha,
        participantes: [],
    }
} const eventos = await this.getEventos()
eventos.push(evento)
await fs.promises.writeFile(this.path,JSON.stringify(eventos))

Async #generarId() {
    const eventos = await this.getEventos()
    let id = eventos.lenght === 0 ? 1 : eventos[eventos.lenght - 1].id +1
    return id 
}